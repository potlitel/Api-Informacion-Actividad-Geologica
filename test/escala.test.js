const request = require('supertest');
const {assert} = require('chai');
const jsdom = require("jsdom");
var Escala = require("../models/Nomenclators/Escala");
const { JSDOM } = jsdom;
const url = process.env.URL_Testing || "http://localhost:4001";
//var sleep = require('sleep');
var mockEscala;
let server;

describe('Escala crud operations unit tests', () => {
    /*Escala.collection.drop();

    beforeEach((done) => {
        mockEscala = new Escala({
            valor_escala: 'test',
        });
        mockEscala.save(function (err) {
            done();
        });
        //sleep.sleep(5)
    });

    afterEach((done) => {
        Escala.collection.drop();
        done();
    });*/
    beforeEach(() => {
        Escala.collection.drop();
        server = require('../index');
    })
    afterEach(async () => { 
    await server.close(); 
    await Escala.remove({});
  });

    /*describe('GET /', () => {
    it('should return all escalas', async () => {
      const escalas = [
        { valor_escala: 'escala1' },
        { valor_escala: 'escala2' },
      ];
      
      await Escala.collection.insertMany(escalas);

      const res = await request(server).get('/api/v1/escala/');
      
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some(g => g.valor_escala === 'escala1')).toBeTruthy();
      expect(res.body.some(g => g.valor_escala === 'escala2')).toBeTruthy();
    });
  });*/
    
})