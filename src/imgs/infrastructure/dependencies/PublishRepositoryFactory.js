import ENV from '../../../config/dotEnv.js'
import PublishImgBucketGoogleRepository from '../repository/PublishImgBucketGoogleRepository.js'
import PublishImgLocalFilesRepository from '../repository/PublishImgLocalFilesRepository.js'

let RepositoryPublish

switch (ENV.PUBLISH_REPOSITORY) {
	case 'google-bucket':
		RepositoryPublish = PublishImgBucketGoogleRepository
		break
	case 'local':
		RepositoryPublish = PublishImgLocalFilesRepository
		break
	default:
		RepositoryPublish = PublishImgLocalFilesRepository
		break
}

export default RepositoryPublish

