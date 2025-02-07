

export default function isLogged(req, res, next)
{
    if (!req.session.user)
         return res.status(200).redirect("login");

    next();
};

export function isAdmin(req,res,next)
{
    if (req.session.user.role !== "admin")
    {
        res.status(200).redirect("/");
        return;
    };

    next();
}