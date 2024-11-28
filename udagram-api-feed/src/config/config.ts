// 
export const config = {
  'username': process.env.POSTGRES_USERNAME || 'tungluu',
  'password': process.env.POSTGRES_PASSWORD || '123456789',
  'database': process.env.POSTGRES_DB || 'postgres',
  'host': process.env.POSTGRES_HOST || 'mycdr.cld1gksbospi.us-east-2.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  }
};

// Log biến môi trường để kiểm tra
console.log(
  process.env.POSTGRES_USERNAME,
  process.env.POSTGRES_PASSWORD,
  process.env.POSTGRES_DB,
  process.env.POSTGRES_HOST
);