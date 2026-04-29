<?php
$localConfig = dirname(__DIR__) . '/config.local.php';

if (file_exists($localConfig)) {
    return require $localConfig;
}

return [
    'db_host' => getenv('ZENECO_DB_HOST') ?: 'localhost',
    'db_user' => getenv('ZENECO_DB_USER') ?: '',
    'db_pass' => getenv('ZENECO_DB_PASS') ?: '',
    'db_name' => getenv('ZENECO_DB_NAME') ?: '',

    'site_name' => 'Zen Eco Homes',
    'realtyflow_brand_id' => getenv('REALTYFLOW_BRAND_ID') ?: 'zeneco',
    'realtyflow_contacts_endpoint' => getenv('REALTYFLOW_CONTACTS_ENDPOINT') ?: 'https://realtyflow.chatgenius.pro/api/contacts',
    'realtyflow_properties_endpoint' => getenv('REALTYFLOW_PROPERTIES_ENDPOINT') ?: 'https://realtyflow.chatgenius.pro/api/properties',

    'gemini_api_key' => getenv('GEMINI_API_KEY') ?: '',
    'replicate_api_key' => getenv('REPLICATE_API_KEY') ?: '',
];
