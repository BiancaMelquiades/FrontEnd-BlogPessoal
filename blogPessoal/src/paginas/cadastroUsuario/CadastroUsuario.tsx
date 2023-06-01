import React, { useState, useEffect, ChangeEvent } from "react";
import './Cadastro.usuario.css';
import User from "../../models/User";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {
    const navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })
    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (user.senha.length >= 8) {
            if (confirmarSenha == user.senha) {
                try {
                    await cadastroUsuario("/usuarios/cadastrar", user, setUserResult);
                    alert("Usuário cadastrado com sucesso!")
                } catch (error) {
                    alert("Falha ao cadastrar usuário, verifique os campos")
                }
            } else {
                alert("Os campos de Senha e Confirmar Senha estão diferentes");
                setUser({ ...user, senha: "" });
                setConfirmarSenha("")
            }
        } else {
            alert("Os campos de Senha e Confirmar Senha precisam de, no mínimo, 8 caracteres");
            setUser({ ...user, senha: "" });
            setConfirmarSenha("")
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="imagem">
            <Grid alignItems='center'>
                <Box paddingX={20} className="formulario">
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos2">Cadastrar</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='Usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1'
                                gutterBottom
                                align='center'>
                                Já tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/login'>
                            <Typography
                                variant='subtitle1'
                                gutterBottom
                                align='center'
                                style={{ fontWeight: 'bold' }}>
                                Entre
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>


        </Grid>


    )
}

export default CadastroUsuario;