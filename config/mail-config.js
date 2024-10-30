const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    // port: 465,
    // host: "smtp.gmail.com",
    // auth: {
    //     type: "OAuth2",
    //     user: "info@utopiadigha.com",
    //     serviceClient: "107864767042257136399",
    //     privateKey:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCv2JNP1okh6xMO\nzohE9smqr1GI6QMIduMUu7AgJsycMdcbdgJiTG7vPdccoMettX4qSzoSi7aIzThA\nRVpneVUn0zLxBFtuo2aBZT8S+khIX0AFuQZg55ztiLx/fhCnJYDBT3SrFbLk8WEH\nNCwfjPRscrzkZPfAa7SS6vjW3NWx8Rjtm8iGq5NqMnotfcTMxwuOsIfgK7WsGpbm\naCMqeDV4GIOubgIqE2zNM+i/M34kQV3djh+OAs2tsw/lnEoeTAGU7uBZNYLhzd/W\nzCVwoN62ZC/PTYdE5rSilq2fB+u0XkFT3UnQSn2cWJgVR5btQAxofFpPaYiQhBHn\n19zQVvDTAgMBAAECggEADfMEFesYBsjzQpNEq7/Yq0HBbzcYxqpJBO3coLhN4T1y\nPxtDQNFSYt0eJtxkQACWk7v9ooH9xr1iLyBb9bsMyR4lEN8pHPjjr/O8UgDpDKtY\nVKaNqHtHGhq6OpzhV6O5zTFEjoZ9TKcPQjczzC7uJs+KnM2bpQ0w47oLEl8DVAcB\nTz25ZIbAkbWWVJd/ydvfOfJ5ZhkSZIaj/krzabtBihMJ2I8Akkrn5ofvqYT31dc7\n00Nf8i5xff06tCoAeH3SYRGy8Rt9dEiryRev0K8V317KK+hvOlVOBcOg9NcBtKCi\nYvA/BHeuy+6Faf6jbJfSRDmGW3DdBeyEuQDt9D65OQKBgQDcqssMutPqZtTcnYnJ\nvMNCqADBMURZD8KnSlcJu2x7nm3wmPcpahTUvOr4rllsZwCzhbNz9Qxiug2kFfdM\nd7sipn6Xz2wz5skgHrP6Wm+KGWQxWsxaMbrSCLRl/T4KmpVnXpOCQ1sdhw/O6wFk\nehqh0twxAi9GOpTYurOuGuz0CQKBgQDMAIz2SH/IkiJ3RJrkSXjaXcKHRcpTcmmW\nlW4bZPvjvSB4ufr9KHIbFTFIsfClRvQ1lTEBaj7o27IO/tt2SQREZkf4XZyRvSxA\n+3mZCJtahCp4n11HwkxgHXeNwP5JabQnGZ9D9SlzhRJ85aDnjL9+IZbgDmA+JOmF\nPuKxY0lM+wKBgQDBSv5oHTNKDV+CDKFIzIeB2OYoVH6ZQRvyLEVHqhxhwKpu6Z7/\ncQPkQcPVp+t+8E8F8iT6evmpdW5DgFZKbkrHFG6pjjEq2YruDtb6gsNXhdxk+zMs\nAomyN5vGBumUokoi7Q5rOZMTr15ikyp6GBdCDxGAAHjmnKQLoKeJ594N+QKBgQCo\nKvgI+mDkbZsd6J8q+2o10L7QlnagbZufN9XJnWiMJ1dCTkYaNSJDMygqfg0boi8k\nkLUSLoxnltvkwrEVhEGRRSOlGT49Yc2+T8/AmLjAWF1OjEjwI7qkLQZmA6dby1ho\nNxX0hoBCK3u/G+iVmJAvIO9oClHKSNF8NwfXJTrCywKBgEdNIyM9Aqnn03AcuoDi\nbR1M1sNcWxAKDWQhHAy3PQraxB/AMvxOJs7ilH9gAalnd4crFkM4eefX+ki483K3\n9boFaIQXu7jAE1FnanEL3q45jDKtFCgTqmmwQ0bQ39VCmchpmYam8RpSFqbLc7MH\n5lAkncZ03NH6IOt3B7a8K5lf\n-----END PRIVATE KEY-----\n",
    //     // clientSecret: 'CLIENT SECRET',
    //     // refreshToken: "REFRESH TOKEN"
    //
    //     // pass: 'utopia@123',
    // },

    port: 465,
    host: "smtp.zoho.in",
    auth: {
        user: 'support@duevion.com',
        pass: 'Pravatmondal@#',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

module.exports = { transporter };
