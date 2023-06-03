import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector as customUseSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';

    function Home() {

        let navigate = useNavigate();
        const token = customUseSelector<TokenState, TokenState["tokens"]>(
            (state) => state.tokens
        );
    
        useEffect(() => {
            if (token == "") {
                toast.error("Você precisa estar logado", {
                    position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                });
                navigate("/login")
    
            }
        }, [token])

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center" // Movido para o container
                className="caixa"
            >
                <Grid item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">
                            Seja bem vindo(a)!
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
                            Expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}></Box>
                            <ModalPostagem/>
                        <Link to="/posts">
                        <Button variant="outlined" className="botao">
                            Ver Postagens
                        </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
function useSelector<T>(arg0: (state: any) => any) {
    throw new Error('Function not implemented.');
}