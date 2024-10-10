import dotenv from 'dotenv';
import KJUR from 'jsrsasign';

dotenv.config();

const iat = Math.round(new Date().getTime() / 1000) -30;
const exp = iat + 60 * 60 *8; // 8 hour
const oHeader = {alg: 'HS256', typ: 'JWT'};
const oPayload = {
    //mn: req.body.mn,
    //role: 0,//req.body.role,
    appKey: process.env.ZOOM_MEETING_SDK_KEY,
    iat: iat,
    exp: exp,
    tokenExp: iat + 60 * 60 * 2
}

const sHeader = JSON.stringify(oHeader);
const sPayload = JSON.stringify(oPayload);
const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, process.env.ZOOM_MEETING_SDK_SECRET);

//console.log(`Payload: ${sPayload}, \n JWT Token: ${signature} \n`);
console.log(signature);
