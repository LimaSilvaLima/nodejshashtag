import joi from 'joi';

export const modeloTime = joi.object({
    nome: joi.string().min(3).required(),
    sigla: joi.string().length(3).required(),
    pontos: joi.number().default(0).required(),   
    jogos: joi.number().default(0).required(),
    vitorias: joi.number().default(0).required(),
    empates: joi.number().default(0).required(),
    derrotas: joi.number().default(0).required(),
    golsMarcados: joi.number().default(0).required(),
    golsSofridos: joi.number().default(0).required(),
    saldoGols: joi.number().default(0).required(),    
});

export const modeloAtualizacaoTime = joi.object({
    nome: joi.string().min(3),
    sigla: joi.string().length(3),
    pontos: joi.number(),
    jogos: joi.number(),
    vitorias: joi.number(),
    empates: joi.number(),
    derrotas: joi.number(),
    golsMarcados: joi.number(),
    golsSofridos: joi.number(),
    saldoGols: joi.number()
}).min(1);
