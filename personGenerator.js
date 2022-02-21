const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Вероника",
            "id_2": "Елена",
            "id_3": "Екатерина",
            "id_4": "Юлия",
            "id_5": "Наталья",
            "id_6": "Яна",
            "id_7": "Соня",
            "id_8": "Матильда",
            "id_9": "Алена",
            "id_10": "Дарья"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

     randomFirstName: function() {
        if (randomGenderNumber === 1) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
        
    },

    randomGender: function() {
        let max = 1;
        let min = 0;
        randomGenderNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomGenderNumber === 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }

    },

     randomSurname: function() {
         if (randomGenderNumber === 1) {
            return this.randomValue(this.surnameJson);
        } else {
            let femaleSurname = this.randomValue(this.surnameJson);
            return femaleSurname + "a";
        }

    },
    
     randomBirthYear: function() {
         let minYear = Math.ceil(1930);
         let maxYear = Math.floor(2021);
         let randomYear = Math.floor(Math.random() * (maxYear - minYear) + minYear);
         return randomYear + " года рождения";

     },



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
    
};
