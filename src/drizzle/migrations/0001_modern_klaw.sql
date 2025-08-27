DROP INDEX "state_idx";--> statement-breakpoint
CREATE INDEX "job_listings_stateAbbreviation_index" ON "job_listings" USING btree ("stateAbbreviation");