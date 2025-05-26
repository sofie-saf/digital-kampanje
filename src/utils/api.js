// src/utils/api.js

export async function fetchInternetUsageData() {
    const response = await fetch('https://data.ssb.no/api/v0/en/table/06998', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: [
          {
            code: 'Kjonn',
            selection: {
              filter: 'item',
              values: ['0'] // Both sexes
            }
          },
          {
            code: 'Alder',
            selection: {
              filter: 'item',
              values: ['16-24']
            }
          },
          {
            code: 'ContentsCode',
            selection: {
              filter: 'item',
              values: [
                'BrukEgetInnhold', // Self-created content
                'Brukaviser',       // Online news
                'BrukSoMe'          // Social networks
              ]
            }
          },
          {
            code: 'Tid',
            selection: {
              filter: 'item',
              values: ['2021', '2022', '2023']
            }
          }
        ],
        response: {
          format: 'json-stat2'
        }
      })
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`SSB API error: ${response.status} – ${errorText}`);
    }
  
    const data = await response.json();
    return data;
  }  