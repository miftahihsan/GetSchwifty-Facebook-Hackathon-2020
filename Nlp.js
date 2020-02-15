class Nlp{

    /*
        @nlp -> nlp object 
        @userData -> The array extracted from HashMap
        @userMsg -> raw text sent by the user to the bot
    */
    compile( nlp, userData, userMsg, database ){
        if( 'location' in nlp ){
            console.log( "length = " + nlp['location'].length ); 
            console.log("Location is = " + nlp['location'] + " " + nlp['location'][0]['value'] );

            if( nlp['location'].length == 2 ){
                database.insert( userData, "from", nlp['location'][0]['value'] );
                database.insert( userData, "to", nlp['location'][ nlp['location'].length - 1 ]['value'] );
            }
            else if( nlp['location'].length == 1 ){
                if( userMsg.includes('to') ) database.insert( userData, "to", nlp['location'][ nlp['location'].length - 1 ]['value'] );
                else if ( userMsg.includes('from') ) database.insert( userData, "from", nlp['location'][0]['value'] );
                
                // defaule no relevant information is provided
                // thus nothing will be registered and the user
                // will be asked to re-enter locaion with the
                // proper format, which includes to or from
                // key words. 
            }
        }
        if( 'datetime' in nlp ){
            var dateAndTime = nlp['datetime'][0]['value'].split('T');

            database.insert( userData, "time", dateAndTime[0] );
            database.insert( userData, "time", dateAndTime[1] );
            console.log("Time is = " + nlp['datetime'][0]['value'] + " " + nlp['datetime'][0]['grain'] );
        }

        console.log( userData );
    }

    /*
        @nlp -> nlp object 
        @name -> name represents tags from the JSON object example : greetings,
                    location, timestamp etc.
    */
    checkGreetings( nlp, name ){
        return nlp && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
    }

    response( data ){

    }

}

module.exports = Nlp;