const {google} = require("googleapis");

async function main () {
    
    try {
    
        // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
        // environment variables.
        const auth = await google.auth.getClient({
            // Scope of the analytics reporting,
            // with only reading access.
            keyFile: '../papiloscopiando_gaservice_keyfile.json',
            scopes: 'https://www.googleapis.com/auth/analytics.readonly',
        });

        // Create the analytics reporting object
        const analyticsreporting = await google.analyticsreporting({
            version: 'v4',
            auth: auth,
        });

        // Fetch the analytics reporting
        const res = await analyticsreporting.reports.batchGet({
            requestBody: {
                reportRequests: [
                    {
                        viewId: '183362896',
                        dateRanges: [
                            {
                                startDate: '2018-09-01',
                                endDate: '2018-11-30',
                            },
                        ],
                        metrics: [
                            {
                                expression: 'ga:pageviews',
                            },
                        ],
                    },
                ],
            },
        });
        return res.data;
    } catch (error) {
        return error;       
    }
}

module.exports = {
    main,
};