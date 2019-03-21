curl "https://acs-v1.endpointlock.com/api/cidlicense" \
--include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR" \
  --header "X-AdvancedCyberSecurity-SellerId": 'acs-isgro' \
  --data '{
    "customer": {
      "first_name": "'"${FIRST}"'",
      "last_name": "'"${LAST}"'",
      "email": "'"${EMAIL}"'",
      "repeat_email": "'"${EMAIL}"'"
    }
  }'
