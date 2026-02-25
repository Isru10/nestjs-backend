import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService{

    constructor(private prisma:PrismaService){}
    signin(){
        
        return "This is a test signin";
    }

    signup(){
        return "This is a test signup";
    }
}