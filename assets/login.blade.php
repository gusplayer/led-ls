<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>komercia</title>

    {!! Html::style('assets/css/main.css') !!}

    <link rel="stylesheet" href="./assets-login/main.css">
    <link rel="shortcut icon" type="image/x-icon" href="http://komercia.co/favicon.ico"/>

</head>
<body>
<div class="section">
    <div class="container">
        <div class="form layout vertical center around-justified section">
            <img src="http://komercia.co/padmin/images/komerlogo.png" width="150px" style="margin-bottom: 20px;">

            <div class="fb layout horizontal center around-justified" on-tap="facebooklogin">
                <img class="fbicon" src="http://komercia.co/padmin/images/fbicon.png">
                <a class="text-facebook" href="/login/facebook">
                    <span class="self-center">Inicia sesión con Facebook</span>
                </a>
            </div>

            <div class="division"></div>

            @if (session('error'))
                <div class="alert alert-error">
                    {{ session('error') }}
                </div>
            @endif

            <form method="post" action="/logueo">
                <div class="inputfield layout horizontal center around-justified">

                    <input type="email" name="email" placeholder="Correo electronico" label="label1"/>
                </div>

                @if ($errors->has('email'))
                    <span style="font-size: 13px;
    color: #FF5A5F;
    cursor: pointer;
    float: left;" class="error">{{ $errors->first('email')}}</span>
                @endif

                <div class="division-forget"></div>

                <br>

                <div class="inputfield layout horizontal center around-justified">
                    <input type="password" name="password" placeholder="Contraseña"/>
                </div>

                @if ($errors->has('password'))
                    <span style="font-size: 13px;
    color: #FF5A5F;
    cursor: pointer;
    float: left;" class="error">{{ $errors->first('password')}}</span>
                @endif

                <br>

                <div class="opciones layout horizontal center justified">

                    <div>
                        <input type="checkbox" name="remember">
                        <span class="checkbox">Recordarme</span>
                    </div>

                    <a href="/forgot-password"><span class="olvidaste">Olvidaste la contraseña?</span></a>

                </div>

                <button class="login layout horizontal center around-justified">
                    Iniciar Sesión
                </button>

            </form>

            <div class="division"></div>

            <div class="opciones layout horizontal center justified">
                <!-- <paper-checkbox>Recordarme</paper-checkbox> -->
                <span class="cuenta">No tienes cuenta?</span>
                <a href="/registro">
                    <div class="register layout horizontal center around-justified">
                        <span>Regístrate</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

</body>


</html>
