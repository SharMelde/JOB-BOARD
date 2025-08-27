import { auth } from "@clerk/nextjs/server"

type UserPermission =
  | "applicant_change:job_listings_create"
  | "applicant_change:job_listings_update"
  | "applicant_change:job_listings_delete"
  | "applicant_change:job_listings_change_status"
  | "applicant_change:job_listing_applicationschange_rating"
  | "applicant_change:job_listing_applications_change_stage"

export async function hasOrgUserPermission(permission: UserPermission) {
  const { has } = await auth()
  return has({ permission })
}