import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../utils/db/db_browser';
import "@/pages/api/utils/patch/bigint_patch";
import HttpCode from "../../../utils/http_code";
import StatusCode from "@/pages/api/utils/status_code";
import Generator from "@/pages/api/utils/generation/generator";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    console.log(JSON.stringify(req.cookies));
    try {
        const {account, password, first_name, end_name, email} = req.body;
        if (account.length < 6 || password.length < 6) {
            res.status(HttpCode.OK).json({
                code: HttpCode.ERROR_REGISTER_ACCOUNT_FORMAT_CODE,
                msg: HttpCode.ERROR_REGISTER_ACCOUNT_FORMAT_MSG,
                data: {}
            });
            return;
        }
        const userAccount = await prisma.baco_users.findFirst({
            where: {
                account: `${account}`,
            }
        });
        if (userAccount) {
            res.status(HttpCode.OK).json({
                code: HttpCode.ERROR_REGISTER_ACCOUNT_CODE,
                msg: HttpCode.ERROR_REGISTER_ACCOUNT_MSG,
                data: {}
            });
            return;
        } else {
            let new_view_id = Generator.viewIdGenerate();
            const userCreated = await prisma.baco_users.create({
                data: {
                    view_id: `${new_view_id}`,
                    account: `${account.trim()}`,
                    password: `${password.trim()}`,
                    first_name: `${first_name.trim()}`,
                    end_name: `${end_name.trim()}`,
                    email: `${email.trim()}`,
                    status: StatusCode.NORMAL
                }
            });
            res.status(HttpCode.OK).json({
                code: HttpCode.OK,
                msg: HttpCode.SUCCESS_MSG,
                data: {account: userCreated}
            });
            return
        }
    } catch (e: any) {
        res.status(HttpCode.OK).json({
            code: HttpCode.ERROR,
            msg: HttpCode.ERROR_MSG,
            data: {api: "register", data: e.name}
        });
    }
}
