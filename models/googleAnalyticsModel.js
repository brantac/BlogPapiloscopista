const {google} = require("googleapis");

async function main () {
    
    // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
    // environment variables.
    const auth = await google.auth.getClient({
        // Scope of the analytics reporting,
        // with only reading access.
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
                            startDate: '2018-08-01',
                            endDate: '2018-11-29',
                        },
                    ],
                    metrics: [
                        {
                            // expression: 'ga:users',
                            expression: 'ga:pageviews',
                        },
                    ],
                },
            ],
        },
    });
    console.log(res.data.reports[0].data.rows[0].metrics);
    return res.data;
}

module.exports = {
    main,
};