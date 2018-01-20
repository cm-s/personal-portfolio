
users = User.create([
  { first_name: 'Calzo', last_name: 'Han', user_name: 'Han Calo', password: 'Hcalo1998' },
  { first_name: 'Manny', last_name: 'zaterian', user_name: 'Mz_the_man', password: 'squirtyismypuppy123' },
  { first_name: 'Taz', last_name: 'Maneian', user_name: 'TheDevil', password: 'looneyMcTooney' },
  { first_name: 'Guy', last_name: 'Connor', user_name: 'ConnorTheMan', password: 'gctm145' },
  { first_name: 'Zachery', last_name: 'Taylor', user_name: 'ZacheryT', password: 'ZTaylor4696' }
  ])
@user1 = User.find(1)
@user2 = User.find(2)
@user3 = User.find(3)
@user4 = User.find(4)
@user5 = User.find(5)
@user1.conversations = Conversation.create([ { recipients: "2, 3" }, { recipients: ' ' } ])
@user2.conversations = Conversation.create([ { recipients: '4' } ])
@user3.conversations = Conversation.create([ { recipients: '4' } ])
@user5.conversations = Conversation.create([ { recipients: '1' } ])
@user1_recipt2 = @user1.conversations.find_by( id: 1 )
@user1_recipt2.messages = Message.create([ { content: "Do you get my message guys?" }, { content: "I can't hear you." } ])
# Es funktioniert nich richtig
