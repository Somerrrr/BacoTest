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
    const {vid} = req.query;
    switch (method) {
        case "GET":
            await prisma.baco_users.findFirst({
                    where: {
                        status: {
                            not: 0
                        },
                        view_id: `${vid}`
                    }
                }
            ).then((value: any) => {
                res.status(HttpCode.OK).json({code: HttpCode.OK, msg: "success", data: {data: value}});
            }).catch((reason: any) => {
                res.status(HttpCode.OK).json({code: 500, msg: "server error", data: {data: reason}});
            });
            break;
        case "PUT":
            const {first_name, end_name, email, account, avatar, password, status} = req.body;
            await prisma.baco_users.update({
                where: {
                    view_id: `${vid}`,
                },
                data: {
                    first_name: `${first_name}`,
                    end_name: `${end_name}`,
                    email: `${email}`,
                    avatar: `${avatar}`,
                    account: `${account}`,
                    password: `${password}`,
                    status: status
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

