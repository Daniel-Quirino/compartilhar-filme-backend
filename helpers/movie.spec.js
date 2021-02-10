const { cleanName, validateLike, validateMongoId }  = require('./movie');

describe('Movie', () => {
    describe('Clean name', () => { 
        it('Clean name whith espace', () => { 
            expect(cleanName('        Pokemón o filme     ')).toBe('Pokemon o filme');
        })

        it('Clean name whith accent', () => { 
            expect(cleanName('João e o Pé de Feijão')).toBe('Joao e o Pe de Feijao');
        })
    })

    describe('Validate', () => { 

        const bodyParams = {
            likes: true
        }
        describe('validate Like', () => { 
            it('validateLike when have number', () => { 
                expect(validateLike(8)).toBe(false);
            })

            it('Have boolean string false', () => { 
                expect(validateLike({...bodyParams, likes:'false'})).toBe(false);
            })

            it('Have boolean false', () => { 
                expect(validateLike({...bodyParams, likes:false})).toBe(true);
            })

            it('Have boolean true', () => { 
                expect(validateLike({...bodyParams, likes:true})).toBe(true);
            })

            it('Have boolean string true', () => { 
                expect(validateLike({...bodyParams, likes:'true'})).toBe(false);
            })

            it('Have string', () => { 
                expect(validateLike({...bodyParams, likes:'another param'})).toBe(false);
            })
        })

        describe('validate MongoId', () => { 
            it('validateLike when have number', () => { 
                expect(validateMongoId('601ff51c18ac57e780539400')).toBe(true);
            })

            it('validateLike when have boolean string true', () => { 
                expect(validateLike('601ff579400')).toBe(false);
            })

            it('validateLike when have boolean true', () => { 
                expect(validateLike(7468568597765654)).toBe(false);
            })

            it('validateLike when have boolean false', () => { 
                expect(validateLike('601ff51c18ac57e78053940064574564')).toBe(false);
            })
        })
    })
})