import Router from 'express-promise-router'
import { body, validationResult } from 'express-validator'
import { Hello } from './hello'
import { Index } from './index'
import { Login } from './login'
import { Post } from './post'
import { Register } from './register'
import { Profile } from './profile'
import { EditProfile } from './editprofile'
import { AuthenticateUser } from '../util/auth'
import { Me } from './me'
import { GetAllUsers, SearchUsers } from './searchUser'
import { GetAllPosts, SearchPosts } from './searchPost'
import { PostCount } from './postCount'
import { FollowerCount } from './followerCount'
import { FollowingCount } from './followingCount'
import { ProfilePosts } from './profilePosts'
import { GetPosts } from './feed'

const router = Router()

router.get('/', Index)
//router.get('/*', GetAllPosts)
router.get('/getallusers', GetAllUsers)

router.get('/hello/:name', Hello)

router.post(
	'/register',
	body('email').isEmail(),
	body('fullName').isLength({ min: 5, max: 120 }),
	body('username').isLength({ min: 5, max: 80 }),
	body('password').isStrongPassword(),
	Register
)

router.get(
	'/post',
	body('picture').isLength({ min: 5 }),
	body('caption').isLength({ min: 5 }),
	body('location').isLength({ min: 5 }),
	Post
)

router.get('/me', AuthenticateUser, Me)

router.post('/login', body('email').isEmail(), body('password'), Login)

router.get('/profile/:profileID', Profile)

router.get('/postCount/:profileID', PostCount)
router.get('/followerCount/:profileID', FollowerCount)
router.get('/followingCount/:profileID', FollowingCount)

router.get('/profilePosts/:profileID', AuthenticateUser, ProfilePosts)

router.post(
	'/editprofile/:profileID',
	body('email').isEmail(),
	body('fullName').isLength({ min: 5, max: 120 }),
	body('bio').isLength({ min: 5, max: 200 }),
	body('username').isLength({ min: 5, max: 80 }),
	body('phone').isLength({ min: 2, max: 15 }),
	AuthenticateUser,
	EditProfile
)

router.get('/api/search_user', SearchUsers)
router.get('/search_post', SearchPosts)
router.get('/feed', AuthenticateUser, GetPosts)

export default router
