import React, { useState, ChangeEvent, useEffect } from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';



function Login () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {

        id: 0,          //valores zerados, pois não foi feito nenhum cadastro/login
        usuario: '',
        senha: '',
        token: ''
    }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
    }



    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="imagem">
                <Grid alignItems="center" item xs={8}>
                    <Box paddingX={20} className="formulario" justifyContent="center">
                        <form onSubmit={onSubmit}>
                            <Typography 
                            variant="h3" 
                            gutterBottom color="textPrimary" 
                            component="h3" align="center" 
                            className="textos1">
                                Entrar
                            </Typography>

                            <TextField 
                            value={userLogin.usuario} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id="usuario" 
                            label="Endereço de e-mail" 
                            type="email" 
                            name="usuario" 
                            margin="normal" 
                            fullWidth />

                            <TextField 
                            value={userLogin.senha} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id="senha" 
                            // error={usuarioLogin.senha.length < 8 && usuarioLogin.senha.length > 0} 
                            // helperText= {usuarioLogin.senha.length < 8 && usuarioLogin.senha.length > 0 ?'mínimo 8 caracteres' : ''}
                            label="Senha" 
                            variant="outlined" 
                            name="senha" 
                            margin="normal" 
                            type="password" 
                            fullWidth />

                            <Box marginTop={2} textAlign="center">
                                    <Button type="submit" variant="contained" color="primary">
                                        Logar
                                    </Button>
                            </Box>
                        </form>
                        <Box display="flex" justifyContent="center" marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                            </Box>
                            <Link to="/cadastroUsuario">
                                <Typography variant="subtitle1" gutterBottom align="center" className="textos1">Cadastre-se </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Login 