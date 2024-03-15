import { Injectable } from '@nestjs/common';
import Handlebars from 'handlebars';
import { transporter } from 'src/config';

@Injectable()
export class MailerService {
  async sendEmailWelcome(to: string, subject: string): Promise<void> {
    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: 'info@remesaespana.com', // Tu dirección de correo electrónico
      to, // Dirección de correo electrónico del destinatario
      subject, // Asunto del correo electrónico
      html: `<!doctype html>
      <html>
        <head>
          <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="x-apple-disable-message-reformatting" />
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!--<![endif]-->
          <title></title>
      
          <style type="text/css">
            @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
      
              .u-row .u-col-50 {
                width: 300px !important;
              }
      
              .u-row .u-col-100 {
                width: 600px !important;
              }
            }
      
            @media (max-width: 620px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: 100% !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
      
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
      
            p {
              margin: 0;
            }
      
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
      
            * {
              line-height: inherit;
            }
      
            a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
            }
      
            table,
            td {
              color: #000000;
            }
            #u_body a {
              color: #409192;
              text-decoration: underline;
            }
            @media (max-width: 480px) {
              #u_content_image_1 .v-src-width {
                width: auto !important;
              }
              #u_content_image_1 .v-src-max-width {
                max-width: 27% !important;
              }
            }
          </style>
      
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
        </head>
      
        <body
          class="clean-body u_body"
          style="
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            background-color: #f9f9f9;
            color: #000000;
          "
        >
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table
            id="u_body"
            style="
              border-collapse: collapse;
              table-layout: fixed;
              border-spacing: 0;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              vertical-align: top;
              min-width: 320px;
              margin: 0 auto;
              background-color: #f9f9f9;
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr style="vertical-align: top">
                <td
                  style="
                    word-break: break-word;
                    border-collapse: collapse !important;
                    vertical-align: top;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: #f9f9f9"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: #f9f9f9;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 15px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <table
                                        height="0px"
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                          border-collapse: collapse;
                                          table-layout: fixed;
                                          border-spacing: 0;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          vertical-align: top;
                                          border-top: 1px solid #f9f9f9;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td
                                              style="
                                                word-break: break-word;
                                                border-collapse: collapse !important;
                                                vertical-align: top;
                                                font-size: 0px;
                                                line-height: 0px;
                                                mso-line-height-rule: exactly;
                                                -ms-text-size-adjust: 100%;
                                                -webkit-text-size-adjust: 100%;
                                              "
                                            >
                                              <span>&#160;</span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: #ffffff;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                id="u_content_image_1"
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 25px 10px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            style="
                                              padding-right: 0px;
                                              padding-left: 0px;
                                            "
                                            align="center"
                                          >
                                            <img
                                              align="center"
                                              border="0"
                                              src="https://i.ibb.co/YPq663w/image-3.png"
                                              alt="Image"
                                              title="Image"
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: inline-block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                width: 12%;
                                                max-width: 69.6px;
                                              "
                                              width="69.6"
                                              class="v-src-width v-src-max-width"
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: #409192;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 35px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            style="
                                              padding-right: 0px;
                                              padding-left: 0px;
                                            "
                                            align="center"
                                          >
                                            <img
                                              align="center"
                                              border="0"
                                              src="https://cdn-icons-png.flaticon.com/128/2652/2652673.png"
                                              alt="Image"
                                              title="Image"
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: inline-block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                width: 5%;
                                                max-width: 26.5px;
                                              "
                                              width="26.5"
                                              class="v-src-width v-src-max-width"
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 0px 10px 30px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          font-size: 14px;
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p
                                          style="
                                            font-size: 14px;
                                            line-height: 140%;
                                            text-align: center;
                                          "
                                        >
                                          <span
                                            style="
                                              font-size: 28px;
                                              line-height: 39.2px;
                                              color: #ffffff;
                                              font-family: Lato, sans-serif;
                                            "
                                            >Bienvenido a Remesa España
                                          </span>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: #ffffff;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 40px 40px 30px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          font-size: 14px;
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 18px;
                                              line-height: 25.2px;
                                              color: #666666;
                                            "
                                            >Hola,</span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 18px;
                                              line-height: 25.2px;
                                              color: #666666;
                                            "
                                            >¡Bienvenida a RemesaEspana!</span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 18px;
                                              line-height: 25.2px;
                                              color: #666666;
                                            "
                                            >Estamos encantados de tenerte como parte
                                            de nuestra comunidad.</span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 18px;
                                              line-height: 25.2px;
                                              color: #666666;
                                            "
                                            >En RemesaEspana, nos enorgullece
                                            brindarte un servicio de calidad y
                                            garantizar tu satisfacción. Nuestro equipo
                                            técnico está disponible para responder a
                                            todas tus preguntas y ayudarte en lo que
                                            necesites.
                                          </span>
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 18px;
                                              line-height: 25.2px;
                                              color: #666666;
                                            "
                                            >No dudes en contactarnos si tienes alguna
                                            duda o consulta.
                                          </span>
                                        </p>
      
                                        <p style="font-size: 14px; line-height: 140%">
                                           
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          ¡Gracias por elegir RemesaEspana!
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 0px 40px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <!--[if mso
                                        ]><style>
                                          .v-button {
                                            background: transparent !important;
                                          }
                                        </style><!
                                      [endif]-->
                                      <div align="left">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:52px; v-text-anchor:middle; width:257px;" arcsize="2%"  stroke="f" fillcolor="#18163a"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
      
                                        <!--[if mso]></center></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 40px 40px 30px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          font-size: 14px;
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              color: #888888;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            ><em
                                              ><span
                                                style="
                                                  font-size: 16px;
                                                  line-height: 22.4px;
                                                "
                                                >Si este correo no fue solicitado por
                                                usted, contacte con un
                                                administrador </span
                                              ></em
                                            ></span
                                          >
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: #409192;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #18163a;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-50"
                          style="
                            max-width: 320px;
                            min-width: 300px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 20px 20px 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          font-size: 14px;
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 16px;
                                              line-height: 22.4px;
                                              color: #ecf0f1;
                                            "
                                            >Contacto</span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 14px;
                                              line-height: 19.6px;
                                              color: #ecf0f1;
                                            "
                                            >Madrid, España</span
                                          >
                                        </p>
                                        <p style="font-size: 14px; line-height: 140%">
                                          <span
                                            style="
                                              font-size: 14px;
                                              line-height: 19.6px;
                                              color: #ecf0f1;
                                            "
                                            >+34 722 85 09 62 |
                                            remesaespana@gmail.com</span
                                          >
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-50"
                          style="
                            max-width: 320px;
                            min-width: 300px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 0px 0px 0px 20px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 25px 10px 10px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div align="center">
                                        <div style="display: table; max-width: 46px">
                                          <!--[if (mso)|(IE)]><table width="46" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:46px;"><tr><![endif]-->
      
                                          <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                          <table
                                            align="left"
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="0"
                                            width="32"
                                            height="32"
                                            style="
                                              width: 32px !important;
                                              height: 32px !important;
                                              display: inline-block;
                                              border-collapse: collapse;
                                              table-layout: fixed;
                                              border-spacing: 0;
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              vertical-align: top;
                                              margin-right: 0px;
                                            "
                                          >
                                            <tbody>
                                              <tr style="vertical-align: top">
                                                <td
                                                  align="left"
                                                  valign="middle"
                                                  style="
                                                    word-break: break-word;
                                                    border-collapse: collapse !important;
                                                    vertical-align: top;
                                                  "
                                                >
                                                  <a
                                                    href="https://www.instagram.com/remesaespana/"
                                                    title="Instagram"
                                                    target="_blank"
                                                  >
                                                    <img
                                                      src="https://i.ibb.co/mhFj6cz/image-2.png"
                                                      alt="Instagram"
                                                      title="Instagram"
                                                      width="32"
                                                      style="
                                                        outline: none;
                                                        text-decoration: none;
                                                        -ms-interpolation-mode: bicubic;
                                                        clear: both;
                                                        display: block !important;
                                                        border: none;
                                                        height: auto;
                                                        float: none;
                                                        max-width: 32px !important;
                                                      "
                                                    />
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <!--[if (mso)|(IE)]></td><![endif]-->
      
                                          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 5px 10px 10px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          font-size: 14px;
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="line-height: 140%; font-size: 14px">
                                          <span
                                            style="
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            ><span
                                              style="
                                                color: #ecf0f1;
                                                font-size: 14px;
                                                line-height: 19.6px;
                                              "
                                              ><span
                                                style="
                                                  line-height: 19.6px;
                                                  font-size: 14px;
                                                "
                                                >Company &copy;&nbsp; All Rights
                                                Reserved</span
                                              ></span
                                            ></span
                                          >
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: #f9f9f9"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: #409192;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #1c103b;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 15px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <table
                                        height="0px"
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                          border-collapse: collapse;
                                          table-layout: fixed;
                                          border-spacing: 0;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          vertical-align: top;
                                          border-top: 1px solid #1c103b;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td
                                              style="
                                                word-break: break-word;
                                                border-collapse: collapse !important;
                                                vertical-align: top;
                                                font-size: 0px;
                                                line-height: 0px;
                                                mso-line-height-rule: exactly;
                                                -ms-text-size-adjust: 100%;
                                                -webkit-text-size-adjust: 100%;
                                              "
                                            >
                                              <span>&#160;</span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: #f9f9f9;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div style="height: 100%; width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!--><div
                              style="
                                box-sizing: border-box;
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                style="font-family: 'Lato', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 0px 40px 30px 20px;
                                        font-family: 'Lato', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          font-size: 14px;
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      ></div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
      `,
    };
    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
  } // fixed

  async sendEmailRecovery(
    to: string,
    subject: string,
    body: string,
    id: any,
    email: string,
  ): Promise<void> {
    // Creamos un objeto de contexto con los datos que deseamos enviar al template
    const context = {
      id: id,
      email: email,
    };

    // Renderizamos el template con los datos del contexto utilizando Handlebars
    const html = Handlebars.compile(`<!doctype html>
    <html>
      <head>
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title></title>
    
        <style type="text/css">
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
            .u-row .u-col {
              vertical-align: top;
            }
    
            .u-row .u-col-50 {
              width: 300px !important;
            }
    
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
    
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
            .u-row {
              width: 100% !important;
            }
            .u-col {
              width: 100% !important;
            }
            .u-col > div {
              margin: 0 auto;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
    
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
    
          p {
            margin: 0;
          }
    
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
    
          * {
            line-height: inherit;
          }
    
          a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
          }
    
          table,
          td {
            color: #000000;
          }
          #u_body a {
            color: #409192;
            text-decoration: underline;
          }
          @media (max-width: 480px) {
            #u_content_image_1 .v-src-width {
              width: auto !important;
            }
            #u_content_image_1 .v-src-max-width {
              max-width: 27% !important;
            }
          }
        </style>
    
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
      </head>
    
      <body
        class="clean-body u_body"
        style="
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          background-color: #f9f9f9;
          color: #000000;
        "
      >
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table
          id="u_body"
          style="
            border-collapse: collapse;
            table-layout: fixed;
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            vertical-align: top;
            min-width: 320px;
            margin: 0 auto;
            background-color: #f9f9f9;
            width: 100%;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr style="vertical-align: top">
              <td
                style="
                  word-break: break-word;
                  border-collapse: collapse !important;
                  vertical-align: top;
                "
              >
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #f9f9f9"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #f9f9f9;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 15px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      height="0px"
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        border-top: 1px solid #f9f9f9;
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                              font-size: 0px;
                                              line-height: 0px;
                                              mso-line-height-rule: exactly;
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <span>&#160;</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: transparent"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_image_1"
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 25px 10px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="https://i.ibb.co/YPq663w/image-3.png"
                                            alt="Image"
                                            title="Image"
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 12%;
                                              max-width: 69.6px;
                                            "
                                            width="69.6"
                                            class="v-src-width v-src-max-width"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: transparent"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #409192;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 35px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="https://i.ibb.co/r364jPg/image-1.png"
                                            alt="Image"
                                            title="Image"
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 5%;
                                              max-width: 26.5px;
                                            "
                                            width="26.5"
                                            class="v-src-width v-src-max-width"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 10px 30px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p
                                        style="
                                          font-size: 14px;
                                          line-height: 140%;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 28px;
                                            line-height: 39.2px;
                                            color: #ffffff;
                                            font-family: Lato, sans-serif;
                                          "
                                          >Recuperación de contraseña</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: transparent"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 40px 40px 30px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-size: 18px;
                                            line-height: 25.2px;
                                            color: #666666;
                                          "
                                          >Hola,</span
                                        >
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                         
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-size: 18px;
                                            line-height: 25.2px;
                                            color: #666666;
                                          "
                                          >Le hemos enviado este correo como
                                          solicitud de recuperación de contraseña
                                          por parte de la empresa</span
                                        >
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                         
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-size: 18px;
                                            line-height: 25.2px;
                                            color: #666666;
                                          "
                                          >Para restablecer su contraseña haga clic
                                          en el siguiente botón:</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 40px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <!--[if mso
                                      ]><style>
                                        .v-button {
                                          background: transparent !important;
                                        }
                                      </style><!
                                    [endif]-->
                                    <div align="left">
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:52px; v-text-anchor:middle; width:257px;" arcsize="2%"  stroke="f" fillcolor="#18163a"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                      <a
                                        href="https://b0s3x2zk-3000.use2.devtunnels.ms/recoverUpdate/{{id}}/{{email}}"
                                        id="recovery"
                                        data="{{id}}"
                                        target="_blank"
                                        class="v-button"
                                        style="
                                          box-sizing: border-box;
                                          display: inline-block;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          text-align: center;
                                          color: #ffffff;
                                          background-color: #fb9f22;
                                          border-radius: 1px;
                                          -webkit-border-radius: 1px;
                                          -moz-border-radius: 1px;
                                          width: auto;
                                          max-width: 100%;
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          word-wrap: break-word;
                                          mso-border-alt: none;
                                          font-size: 14px;
                                        "
                                      >
                                        <span
                                          style="
                                            display: block;
                                            padding: 15px 40px;
                                            line-height: 120%;
                                          "
                                          ><span
                                            style="
                                              font-size: 18px;
                                              line-height: 21.6px;
                                            "
                                            >Recuperar Contraseña</span
                                          ></span
                                        >
                                      </a>
                                      <!--[if mso]></center></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 40px 40px 30px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            color: #888888;
                                            font-size: 14px;
                                            line-height: 19.6px;
                                          "
                                          ><em
                                            ><span
                                              style="
                                                font-size: 16px;
                                                line-height: 22.4px;
                                              "
                                              >Si este correo no fue solicitado por
                                              usted, contacte con un
                                              administrador </span
                                            ></em
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: transparent"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #409192;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #18163a;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-50"
                        style="
                          max-width: 320px;
                          min-width: 300px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 20px 20px 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-size: 16px;
                                            line-height: 22.4px;
                                            color: #ecf0f1;
                                          "
                                          >Contacto</span
                                        >
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-size: 14px;
                                            line-height: 19.6px;
                                            color: #ecf0f1;
                                          "
                                          >Madrid, España</span
                                        >
                                      </p>
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="
                                            font-size: 14px;
                                            line-height: 19.6px;
                                            color: #ecf0f1;
                                          "
                                          >+34 722 85 09 62 |
                                          remesaespana@gmail.com</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-50"
                        style="
                          max-width: 320px;
                          min-width: 300px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px 0px 0px 20px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 25px 10px 10px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div align="center">
                                      <div style="display: table; max-width: 46px">
                                        <!--[if (mso)|(IE)]><table width="46" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:46px;"><tr><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 0px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.instagram.com/remesaespana/"
                                                  title="Instagram"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://i.ibb.co/mhFj6cz/image-2.png"
                                                    alt="Instagram"
                                                    title="Instagram"
                                                    width="32"
                                                    style="
                                                      
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 5px 10px 10px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%; font-size: 14px">
                                        <span
                                          style="
                                            font-size: 14px;
                                            line-height: 19.6px;
                                          "
                                          ><span
                                            style="
                                              color: #ecf0f1;
                                              font-size: 14px;
                                              line-height: 19.6px;
                                            "
                                            ><span
                                              style="
                                                line-height: 19.6px;
                                                font-size: 14px;
                                              "
                                              >Company &copy;&nbsp; All Rights
                                              Reserved</span
                                            ></span
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #f9f9f9"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #409192;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #1c103b;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 15px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      height="0px"
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        border-top: 1px solid #1c103b;
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                              font-size: 0px;
                                              line-height: 0px;
                                              mso-line-height-rule: exactly;
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <span>&#160;</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: transparent"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #f9f9f9;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div style="height: 100%; width: 100% !important">
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Lato', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 40px 30px 20px;
                                      font-family: 'Lato', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    ></div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
    </html>
    `)(context);

    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: 'info@remesaespana.com', // Tu dirección de correo electrónico
      to, // Dirección de correo electrónico del destinatario
      subject, // Asunto del correo electrónico
      html: html,
    };
    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
  }
}
