import User from '../api/user'
import Section from '../api/section'
import Thread from '../api/thread'
import Post from '../api/post'

// clear up the DB first

User.remove({})
Section.remove({})
Thread.remove({})
Post.remove({})

// adding data

let users = {
	bread: Accounts.createUser({
		username: 'bread',
		email: 'bread@protonmail.ch',
		password: 'bread'
	}),

	baguette: Accounts.createUser({
		username: 'baguette',
		email: 'baguette@protonmail.ch',
		password: 'baguette'
	})
}

let sections = {
	politics: new Section({
		name: 'Politics',
		shorthand: 'p'
	}).save(),
	
	sex: new Section({
		name: 'Sex',
		shorthand: 'sex'
	}).save(),

	transcendental: new Section({
		name: 'Transcendental',
		shorthand: 'om'
	}).save()
}

let threads = {
	thread1: new Thread({
		name: 'Politics as the cause of all suffering',
		sectionId: sections.politics,
		authorId: users.bread
	}).save(),

	thread2: new Thread({
		name: 'Why do we have to put up with the Chinese?',
		sectionId: sections.politics,
		authorId: users.baguette
	}).save(),

	thread3: new Thread({
		name: 'The best way to treat your slaves',
		sectionId: sections.politics,
		authorId: users.baguette
	}).save(),

	thread4: new Thread({
		name: 'Why are all my women so mean?',
		sectionId: sections.sex,
		authorId: users.bread
	}).save(),

	thread5: new Thread({
		name: 'How to get rid of all the carbage in my mind to see the world clearly?',
		sectionId: sections.transcendental,
		authorId: users.bread
	}).save()
}