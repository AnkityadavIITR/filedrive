
export const verifyEmail = async (auth,toast) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        console.log("Email verification sent successfully!");
        toast.success("email verification is send");
      } else {
        throw new Error("User not logged in.");
      }
    } catch (error) {
      console.error("Error sending email verification:", error.message);
    }
  };