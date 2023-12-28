import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from "@/pages/api/utils/db/db_browser";
import "@/pages/api/utils/patch/bigint_patch";
import "@/pages/api/utils/generation/generator"
import HttpCode from "@/pages/api/utils/http_code";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req;
    const {uvid} = req.query;
    switch (method) {
        case "GET":
            await prisma.baco_address.findMany({
                    where: {
                        status: {
                            not: 0
                        },
                        user_view_id: `${uvid}`
                    }
                }
            ).then((value: any) => {
                res.status(HttpCode.OK).json({code: HttpCode.OK, msg: "success", data: {data: value}});
            }).catch((reason: any) => {
                res.status(HttpCode.OK).json({code: 500, msg: "server error", data: {data: reason}});
            });
            break;
        case "PUT":

            const {view_id, address, status} = req.body;
            await prisma.baco_address.update({
                where: {
                    view_id: `${view_id}`,
                },
                data: {
                    address: `${address}`,
                    status: status,
                }
            }).then((value: any) => {
                res.status(HttpCode.OK).json({code: HttpCode.OK, msg: "success", data: {data: value}});
            }).catch((reason: any) => {
                res.status(HttpCode.OK).json({code: HttpCode.ERROR, msg: "server error", data: {data: reason}});
            });
            break;
        default:
            res.setHeader("Allow", ["GET", "PUT"]);
            res.status(HttpCode.OK).json({
                code: HttpCode.ERROR_REQUEST_METHOD_CODE,
                msg: HttpCode.ERROR_REQUEST_METHOD_MSG,
                data: {}
            });
            break;
    }
}

