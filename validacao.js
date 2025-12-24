import joi from 'joi';

const modeloTime = joi.object({
    nome: joi.string().min(3).required(),
    sigla: joi.string().length(3).required(),
    pontos: joi.number().integer().min(0).required(),   
    jogos: joi.number().integer().min(0).required(),
    vitorias: joi.number().integer().min(0).required(),
    empates: joi.number().integer().min(0).required(),
    derrotas: joi.number().integer().min(0).required(),
    golsPro: joi.number().integer().min(0).required(),
    golsContra: joi.number().integer().min(0).required(),

    saldoGols: joi.number().integer().required(),
    aproveitamento: joi.number().precision(2).required()    
})
