# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Noah Vicente

1. No, I would not use a unit test since the messaging feature would have many different components to it that interact with each other across the application and feature. This would include being able to write a message, verifying recipients, message encryption, etc, which are not isolated features that can be tested in a unit test.
2. Yes, I would use a unit test since a max length test isolates a feature that is independent of others to be tested. This test can execute quickly, debugs on a small scale, and its functionality can be tested on its own as other components or features do not interact with it.