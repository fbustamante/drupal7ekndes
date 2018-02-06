---- THANK YOU FOR BUYING THIS MODULE FOR DRUPAL 7.x ----
This module was created by Andreas Quist, co-owner and CEO of http://mediemaskinen.dk.


Installation:
Upload bootstrap_blocks.zip through either Drupals module installer, or by unpacking it and manually placing it in your modules folder. For further instructions, read through the guidelines.




Guidelines for installation:
There are two basic ways to upload module files to a Drupal 7 site:

Through the Drupal user interface
Manually on the server
The first option will not work on many types of servers, but may be a more user-friendly choice on servers where it does work. The second option is always available.


Option 1: 
Upload the module through the Drupal interface upgrade manager icon for installing new modules

Navigate to the install page. Navigate to Modules > List (tab), or http://example.com/admin/modules, and click the link 'Install new module.' (You must have the Update manager module enabled to see this link. For those new to Drupal, go to "Modules", find "Update Manager," put a check mark in the box by "Update Manager" and then click "Save" at the bottom of the page. You should now have a link to install new modules.)
Follow the prompts. You will be prompted to provide to upload the .zip file from your local computer. Click 'Install', and the Update manager will copy the files into your sites/all/modules folder. (See Update manager for more information about what that core module can do.) The next screen gives you two links. Click 'Enable newly added modules' and skip down to the 'Enable and configure' section.
Update manager for installing a module

If your site asks for your FTP username and password, it is referring to the username and password to access your site, not drupal.org

A note about FTP: If FTP is not enabled for your server, you may receive an error message. Drupal will not be able to diagnose the problem, only tell you that there is one. It's up to you to determine whether your server is properly configured for FTP.


Option 2: 
Upload the module manually

Upload the folder. Transfer your files with SFTP or FTP to the desired modules folder in your Drupal installation (or if you are using version control, add and commit them to your code repository). The modules folder at the top level of your Drupal installation is reserved for Drupal core modules (the ones that come with the original download of Drupal). Contributed modules belong in  sites/all/modules. If you are running a multi-site installation of Drupal, use sites/my.site.folder/modules for modules there that are specific to a particular site in your installation. Modules that will be shared between all sites should be placed in sites/all/modules.
Please note: Especially for sites with a lot of additional modules, many people have begun to further divide the modules folder, to help stay organized. A typical way of doing this would be:

sites/all/modules/contrib for all contributed modules.
sites/all/modules/custom for all custom modules.
sites/all/modules/features if you have additional modules that were created using Features.