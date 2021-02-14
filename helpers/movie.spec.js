const { 
    cleanName, 
    validateLike, 
    validateMongoId, 
    validateRate
    }  = require('./movie');

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
        describe('validate Like', () => { 
            it('validateLike when have number', () => { 
                expect(validateLike(8)).toBe(false);
            })

            it('Have boolean string false', () => { 
                expect(validateLike('false')).toBe(false);
            })

            it('Have boolean false', () => { 
                expect(validateLike(false)).toBe(true);
            })

            it('Have boolean true', () => { 
                expect(validateLike(true)).toBe(true);
            })

            it('Have boolean string true', () => { 
                expect(validateLike('true')).toBe(false);
            })

            it('Have string', () => { 
                expect(validateLike('another param')).toBe(false);
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

        describe('Validate Rate', () => { 
            it('Validate Rate when have number more than 5', () => { 
                expect(validateRate(6)).toBe(false);
            })

            it('Validate Rate when have number less than 5', () => { 
                expect(validateRate(3)).toBe(true);
            })

            it('Validate Rate when have negative number', () => { 
                expect(validateRate(-8)).toBe(false);
            })

            it('Validate Rate when have string value', () => { 
                expect(validateRate('45')).toBe(false);
            })
        })
    })
})