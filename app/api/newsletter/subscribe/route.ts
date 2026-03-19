import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type Body = {
  email?: string;
};

type Subscriber = {
  email: string;
  subscribedAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "newsletter-subscribers.json");

function normalizeEmail(input: string): string {
  return input.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  if (email.length < 5 || email.length > 320) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await fs.readFile(SUBSCRIBERS_FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is Subscriber => {
      if (!item || typeof item !== "object") return false;
      const maybe = item as Partial<Subscriber>;
      return typeof maybe.email === "string" && typeof maybe.subscribedAt === "string";
    });
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: Subscriber[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tempPath = `${SUBSCRIBERS_FILE}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(subscribers, null, 2), "utf8");
  await fs.rename(tempPath, SUBSCRIBERS_FILE);
}

export async function POST(req: Request) {
  let body: Body;

  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.email || typeof body.email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const email = normalizeEmail(body.email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const subscribers = await readSubscribers();
  const exists = subscribers.some((subscriber) => normalizeEmail(subscriber.email) === email);

  if (exists) {
    return NextResponse.json({ error: "Email is already subscribed" }, { status: 409 });
  }

  subscribers.push({
    email,
    subscribedAt: new Date().toISOString()
  });

  await writeSubscribers(subscribers);

  return NextResponse.json({ success: true, totalSubscribers: subscribers.length });
}
