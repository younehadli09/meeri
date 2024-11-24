const { expressjwt: jwt } = require("express-jwt");

function auth_jwt() {
    const secret = process.env.JWT_SECRET;

    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked : isRevoked
    }).unless({
        path: [
            // Public routes that don't require authentication
            { url: /\/StoreAPI\/users/, methods: ['POST'] },
            
            { url: /\/StoreAPI\/products/, methods: ['GET'] },
            { url: /\/StoreAPI\/products/, methods: ['POST'] },

            { url: /\/StoreAPI\/products/, methods: ['DELETE'] },


            { url: /\/StoreAPI\/categories/, methods: ['GET'] },

            { url: /\/StoreAPI\/categories/, methods: ['POST'] },
            { url: /\/StoreAPI\/categories/, methods: ['DELETE'] },
            { url: /\/StoreAPI\/orders/, methods: ['POST'] },
            { url: /\/StoreAPI\/orders/, methods: ['GET'] },



        ]
    });
}
async function isRevoked(req, token) {
    if (!token.payload.isAdmin) {
        return true; 
    }
    return false;
}

module.exports = auth_jwt;
