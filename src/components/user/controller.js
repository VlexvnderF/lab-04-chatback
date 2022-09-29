import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (_req,res) =>{
    try{
        const users = await prisma.user.findMany();

        res.json({
            ok:  true,
            data:  users,
        });
    } catch(error){
        return res.status(500).json({
            ok: false,
            data: error.message,
        });
    }
};

const findOne = async(email) =>{
    try{
        return await prisma.user.findFirst({where:{email}});
    } catch(error){
        return null;
    }
};

export const store = async (req,res)=>{
    try{
        const{ body }=req;

        const userByEmail=await findOne(body.email);

        if(userByEmail){
            return res.json({
                ok:true,
                data: userByEmail,
            });
        }
    body.profile_url = `https://avaatars.dicebear.com/api/avataaars/${body.name}.svg`;
    const user = await prisma.user.create({
        data: {
            ...body,
        },
    });

    res.status(201).json({
        ok: true,
        data: user,
    });
    } catch(error){
        return res.status(500).json({
            ok:false,
            data: error.message,
        });
    }
    
};