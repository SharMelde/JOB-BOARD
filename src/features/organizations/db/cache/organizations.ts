import { getGlobalTag, getIdTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getOrganizationGlobalTag() {
    return getGlobalTag("Organization")
}

export function getOrganizationIdTag(id: string) {
    return getIdTag("Organization", id)
}

export function revalidateOrganizationCache(id: string) {
    revalidateTag(getOrganizationGlobalTag())
    revalidateTag(getOrganizationIdTag(id))
}