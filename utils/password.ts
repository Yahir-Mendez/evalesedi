import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function saltAndHashPassword(password: string): Promise<string>{
    if(!password)throw new Error("No password provided.");
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};
export async function verifyPassword(password:string, hashedPassword: string): Promise<boolean>{
    if(!password || !hashedPassword)throw new Error("Password or hashed password missing");
    return await bcrypt.compare(password, hashedPassword);
}