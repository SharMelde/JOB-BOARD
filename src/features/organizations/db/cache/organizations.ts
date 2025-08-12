import { getGlobalTag, getIdTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getOrganizationGlobalTag() {
    return getGlobalTag("users")
}

export function getOrganizationIdTag(id: string) {
    return getIdTag("users", id)
}

export function revalidateUserCache(id: string) {
    revalidateTag(getOrganizationGlobalTag())
    revalidateTag(getOrganizationIdTag(id))
}