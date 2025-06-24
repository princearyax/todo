import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("key"); //sud be userid of current user or IP

        if(!success) return res.status(429).json(
            {message: "too many requests"});

        next();

    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
}

export default rateLimiter;