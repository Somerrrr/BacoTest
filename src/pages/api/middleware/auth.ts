// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from "@/pages/api/utils/db/db_browser";
import "@/pages/api/utils/patch/bigint_patch";
import HttpCode from "@/pages/api/utils/http_code";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("=================auth=================");
    let bodyJson = JSON.parse(req.body)
    let uvid = bodyJson.uvid;
    let token = bodyJson.token;
    console.log("req.body uvid:" + uvid + ";token:" + token);
    await prisma.baco_users.findFirst({
        where: {
            view_id: uvid
        }
    }).then((value: any) => {
        if (value?.token === `${token}`) {
            res.status(HttpCode.OK).json({code: HttpCode.OK, msg: "success", data: {}});
        } else {
            res.status(HttpCode.OK).json({code: HttpCode.ERROR_AUTH_CODE, msg: "not auth", data: {}});
        }
    }).catch((reason: any) => {
        res.status(HttpCode.OK).json({code: 500, msg: "server error auth", data: {data: reason}});
    });
}
