module.exports = Object.freeze({
    send_birthday_email : {
        template:(name)=>'Dear '+name+', Wishing you a happy birthday  -- Hotel Utopia'
    },
    send_otp_email: {
        template:(name, otp)=> `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Static Template</title>

                    <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                    />
                </head>
                <body
                    style="
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    background: #ffffff;
                    font-size: 14px;
                    "
                >
                    <div
                    style="
                        max-width: 680px;
                        margin: 0 auto;
                        padding: 45px 30px 60px;
                        background: #f4f7ff;
                        background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
                        background-repeat: no-repeat;
                        background-size: 800px 452px;
                        background-position: top center;
                        font-size: 14px;
                        color: #434343;
                    "
                    >
                    <header>
                        <table style="width: 100%;">
                        <tbody>
                            <tr style="height: 0;">
                            <td>
                                <img
                                alt=""
                                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1663574980688_114990/archisketch-logo"
                                height="30px"
                                />
                            </td>
                            <td style="text-align: right;">
                                <span
                                style="font-size: 16px; line-height: 30px; color: #ffffff;"
                                >12 Nov, 2021</span
                                >
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </header>

                    <main>
                        <div
                        style="
                            margin: 0;
                            margin-top: 70px;
                            padding: 92px 30px 115px;
                            background: #ffffff;
                            border-radius: 30px;
                            text-align: center;
                        "
                        >
                        <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                            <h1
                            style="
                                margin: 0;
                                font-size: 24px;
                                font-weight: 500;
                                color: #1f1f1f;
                            "
                            >
                            Your OTP
                            </h1>
                            <p
                            style="
                                margin: 0;
                                margin-top: 17px;
                                font-size: 16px;
                                font-weight: 500;
                            "
                            >
                            Hey ${name},
                            </p>
                            <p
                            style="
                                margin: 0;
                                margin-top: 17px;
                                font-weight: 500;
                                letter-spacing: 0.56px;
                            "
                            >
                            Thank you for choosing DueVion. Use the following OTP
                            to complete the procedure to varify your email address. OTP is
                            valid for
                            <span style="font-weight: 600; color: #1f1f1f;">1 minutes</span>.
                            Do not share this code with others, including DueVion
                            employees.
                            </p>
                            <p
                            style="
                                margin: 0;
                                margin-top: 60px;
                                font-size: 40px;
                                font-weight: 600;
                                letter-spacing: 25px;
                                color: #ba3d4f;
                            "
                            >
                            ${otp}
                            </p>
                        </div>
                        </div>

                        <p
                        style="
                            max-width: 400px;
                            margin: 0 auto;
                            margin-top: 90px;
                            text-align: center;
                            font-weight: 500;
                            color: #8c8c8c;
                        "
                        >
                        Need help? Ask at
                        <a
                            href="mailto:support@duevion.com"
                            style="color: #499fb6; text-decoration: none;"
                            >support@duevion.com</a
                        >
                        or visit our
                        <a
                            href=""
                            target="_blank"
                            style="color: #499fb6; text-decoration: none;"
                            >Help Center</a
                        >
                        </p>
                    </main>

                    <footer
                        style="
                        width: 100%;
                        max-width: 490px;
                        margin: 20px auto 0;
                        text-align: center;
                        border-top: 1px solid #e6ebf1;
                        "
                    >
                        <p
                        style="
                            margin: 0;
                            margin-top: 40px;
                            font-size: 16px;
                            font-weight: 600;
                            color: #434343;
                        "
                        >
                        DueVion
                        </p>
                        <p style="margin: 0; margin-top: 8px; color: #434343;">
                        Address 540, City, State.
                        </p>
                        <div style="margin: 0; margin-top: 16px;">
                        <a href="" target="_blank" style="display: inline-block;">
                            <img
                            width="36px"
                            alt="Facebook"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                            />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Instagram"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
                        /></a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Twitter"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                            />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Youtube"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
                        /></a>
                        </div>
                        <p style="margin: 0; margin-top: 16px; color: #434343;">
                        Copyright © 2022 DueVion. All rights reserved.
                        </p>
                    </footer>
                    </div>
                </body>
                </html>
       
        `
    },
    send_pin_recovery_email : {
        template : (name , pin, userId)=> `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Static Template</title>

                    <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                    />
                </head>
                <body
                    style="
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    background: #ffffff;
                    font-size: 14px;
                    "
                >
                    <div
                    style="
                        max-width: 680px;
                        margin: 0 auto;
                        padding: 45px 30px 60px;
                        background: #f4f7ff;
                        background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
                        background-repeat: no-repeat;
                        background-size: 800px 452px;
                        background-position: top center;
                        font-size: 14px;
                        color: #434343;
                    "
                    >
                    <header>
                        <table style="width: 100%;">
                        <tbody>
                            <tr style="height: 0;">
                            <td>
                                <img
                                alt=""
                                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1663574980688_114990/archisketch-logo"
                                height="30px"
                                />
                            </td>
                            <td style="text-align: right;">
                                <span
                                style="font-size: 16px; line-height: 30px; color: #ffffff;"
                                >12 Nov, 2021</span
                                >
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </header>

                    <main>
                        <div
                        style="
                            margin: 0;
                            margin-top: 70px;
                            padding: 92px 30px 115px;
                            background: #ffffff;
                            border-radius: 30px;
                            text-align: center;
                        "
                        >
                        <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                            <h1
                            style="
                                margin: 0;
                                font-size: 24px;
                                font-weight: 500;
                                color: #1f1f1f;
                            "
                            >
                            Your UserId and Password
                            </h1>
                            <p
                            style="
                                margin: 0;
                                margin-top: 17px;
                                font-size: 16px;
                                font-weight: 500;
                            "
                            >
                            Hey ${name},
                            </p>
                            <p>
                                We received a request to reset the password associated with your DueVion account. Please find your account details below:
                            </p>
                            <p>
                                <strong>User ID:</strong> <span style="font-weight: 600; color: #1f1f1f;">${userId}</span><br>
                                <strong>DueVion PIN:</strong> <span style="font-weight: 600; color: #1f1f1f;">${(pin=="" ? "PIN has been set." : pin)}</span>
                            </p>
                            <p>
                                Please use the above credentials to log in to your account. We recommend that you change your password after logging in to ensure your account's security.
                            </p>
                            <p>
                                If you did not request this change, please contact our support team immediately.
                            </p>
                            <p>
                                Do not share this information with anyone, including DueVion employees.
                            </p>
                            <p>
                                Thank you for choosing DueVion.
                            </p>


                        </div>
                        </div>

                        <p
                        style="
                            max-width: 400px;
                            margin: 0 auto;
                            margin-top: 90px;
                            text-align: center;
                            font-weight: 500;
                            color: #8c8c8c;
                        "
                        >
                        Need help? Ask at
                        <a
                            href="mailto:support@duevion.com"
                            style="color: #499fb6; text-decoration: none;"
                            >support@duevion.com</a
                        >
                        or visit our
                        <a
                            href=""
                            target="_blank"
                            style="color: #499fb6; text-decoration: none;"
                            >Help Center</a
                        >
                        </p>
                    </main>

                    <footer
                        style="
                        width: 100%;
                        max-width: 490px;
                        margin: 20px auto 0;
                        text-align: center;
                        border-top: 1px solid #e6ebf1;
                        "
                    >
                        <p
                        style="
                            margin: 0;
                            margin-top: 40px;
                            font-size: 16px;
                            font-weight: 600;
                            color: #434343;
                        "
                        >
                        DueVion
                        </p>
                        <p style="margin: 0; margin-top: 8px; color: #434343;">
                        Address 540, City, State.
                        </p>
                        <div style="margin: 0; margin-top: 16px;">
                        <a href="" target="_blank" style="display: inline-block;">
                            <img
                            width="36px"
                            alt="Facebook"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                            />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Instagram"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
                        /></a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Twitter"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                            />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Youtube"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
                        /></a>
                        </div>
                        <p style="margin: 0; margin-top: 16px; color: #434343;">
                        Copyright © 2022 DueVion. All rights reserved.
                        </p>
                    </footer>
                    </div>
                </body>
                </html>
       
        `
    },
    wellcome_to_duevion : {
        template : (user_id)=> `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Static Template</title>

                    <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                    />
                </head>
                <body
                    style="
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    background: #ffffff;
                    font-size: 14px;
                    "
                >
                    <div
                    style="
                        max-width: 680px;
                        margin: 0 auto;
                        padding: 45px 30px 60px;
                        background: #f4f7ff;
                        background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
                        background-repeat: no-repeat;
                        background-size: 800px 452px;
                        background-position: top center;
                        font-size: 14px;
                        color: #434343;
                    "
                    >
                    <header>
                        <table style="width: 100%;">
                        <tbody>
                            <tr style="height: 0;">
                            <td>
                                <img
                                alt=""
                                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1663574980688_114990/archisketch-logo"
                                height="30px"
                                />
                            </td>
                            <td style="text-align: right;">
                                <span
                                style="font-size: 16px; line-height: 30px; color: #ffffff;"
                                >12 Nov, 2021</span
                                >
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </header>

                    <main>
                        <div
                        style="
                            margin: 0;
                            margin-top: 70px;
                            padding: 92px 30px 115px;
                            background: #ffffff;
                            border-radius: 30px;
                            text-align: center;
                        "
                        >
                        <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                            <h1
                            style="
                                margin: 0;
                                font-size: 24px;
                                font-weight: 500;
                                color: #1f1f1f;
                            "
                            >
                            Your UserId and Password
                            </h1>
                            <p
                            style="
                                margin: 0;
                                margin-top: 17px;
                                font-size: 16px;
                                font-weight: 500;
                            "
                            >
                            Hey DueVion User,
                            </p>
                            <p>
                                Wellcome to duevion. Please find your DueVion Id below:
                            </p>
                            <p>
                                <strong>DueVion ID:</strong> <span style="font-weight: 600; color: #1f1f1f;">${user_id}</span><br>
                            </p>
                            <p>
                                Please use the above credentials to log in to your account.
                            </p>
                            <p>
                                Do not share this information with anyone, including DueVion employees.
                            </p>
                            <p>
                                Thank you for choosing DueVion.
                            </p>


                        </div>
                        </div>

                        <p
                        style="
                            max-width: 400px;
                            margin: 0 auto;
                            margin-top: 90px;
                            text-align: center;
                            font-weight: 500;
                            color: #8c8c8c;
                        "
                        >
                        Need help? Ask at
                        <a
                            href="mailto:support@duevion.com"
                            style="color: #499fb6; text-decoration: none;"
                            >support@duevion.com</a
                        >
                        or visit our
                        <a
                            href=""
                            target="_blank"
                            style="color: #499fb6; text-decoration: none;"
                            >Help Center</a
                        >
                        </p>
                    </main>

                    <footer
                        style="
                        width: 100%;
                        max-width: 490px;
                        margin: 20px auto 0;
                        text-align: center;
                        border-top: 1px solid #e6ebf1;
                        "
                    >
                        <p
                        style="
                            margin: 0;
                            margin-top: 40px;
                            font-size: 16px;
                            font-weight: 600;
                            color: #434343;
                        "
                        >
                        DueVion
                        </p>
                        <p style="margin: 0; margin-top: 8px; color: #434343;">
                        Address 540, City, State.
                        </p>
                        <div style="margin: 0; margin-top: 16px;">
                        <a href="" target="_blank" style="display: inline-block;">
                            <img
                            width="36px"
                            alt="Facebook"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                            />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Instagram"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
                        /></a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Twitter"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                            />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            style="display: inline-block; margin-left: 8px;"
                        >
                            <img
                            width="36px"
                            alt="Youtube"
                            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
                        /></a>
                        </div>
                        <p style="margin: 0; margin-top: 16px; color: #434343;">
                        Copyright © 2022 DueVion. All rights reserved.
                        </p>
                    </footer>
                    </div>
                </body>
                </html>
       
        `
    },
    send_marriage_anniversary_email : {
        template:(name)=>'Dear '+name+', Wishing you a happy wedding anniversary  -- Hotel Utopia'
    },
    send_password_email : {
        template:(name,purpose,password)=>'Dear '+name+', Your password to '+purpose+' is '+password+'. Please do not share your password with anyone. Our hotel representative will never ask you your account password.  -- Hotel Utopia'
    }
});