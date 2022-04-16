(async () => {
    require('dotenv').config();
    const sqsClient = require('../consumer/sqsClientConsumer');

    try{
        const result = await sqsClient.sendMessage(
            {
                id: 1,
                action: 'x'
            }
        );
        console.log(result);
    }catch (error){
        console.log(`ERRO by Producer: ${error}`);
    }

})();

