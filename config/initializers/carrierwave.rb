CarrierWave.configure do |config|
  if !Rails.env.test?
    config.storage    = :aws
    # config.aws_bucket = ENV.fetch('S3_BUCKET_NAME')
    config.aws_acl    = 'public-read'

    config.aws_authenticated_url_expiration = 60 * 60 * 24 * 7
    
    config.aws_credentials = {
      access_key_id:     ENV.fetch('AWS_ACCESS_KEY_ID'),
      secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY'),
      region:            ENV.fetch('AWS_REGION') # Required
    }

    if Rails.env.production?
      config.aws_bucket  = ENV["S3_BUCKET_PROD"]
    else
      config.aws_bucket  = ENV["S3_BUCKET_DEV"]
    end
  end
end