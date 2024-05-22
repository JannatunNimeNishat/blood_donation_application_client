"use server"

export const registerUser = async (userData:any) =>{
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`,
        {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
              cache: "no-store",
        }
    );
    const userInfo = await res.json();
  return userInfo;
}