import {Response} from "next/dist/server/web/spec-compliant/response";
import {Request} from "next/dist/server/web/spec-compliant/request";
import _QiaoDu from "../../_QiaoDu";

export default async function handler(req: Request, res: Response) {
    // @ts-ignore
    await res.json(_QiaoDu.information);
}
