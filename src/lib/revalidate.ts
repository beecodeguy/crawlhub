"use server";

import {
  revalidatePath as revalidatePage,
  revalidateTag as revalTag,
} from "next/cache";

export async function revalidatePath(page: string) {
  revalidatePage(page);
}

export async function revalidateTag(page: string) {
  revalTag(page);
}
