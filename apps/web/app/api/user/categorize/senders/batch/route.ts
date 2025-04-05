import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { withError } from "@/utils/middleware";
import { handleBatchRequest } from "@/app/api/user/categorize/senders/batch/handle-batch";
import { env } from "@/env";

export const maxDuration = 60;

export const POST = withError(verifySignatureAppRouter(handleBatchRequest));
