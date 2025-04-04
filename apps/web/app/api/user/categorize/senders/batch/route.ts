import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { withError } from "@/utils/middleware";
import { handleBatchRequest } from "@/app/api/user/categorize/senders/batch/handle-batch";
import { env } from "@/env";

export const maxDuration = Math.min(env.MAX_DURATION, 300);

export const POST = withError(verifySignatureAppRouter(handleBatchRequest));
