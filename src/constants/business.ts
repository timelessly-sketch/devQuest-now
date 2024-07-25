import { transformRecordToOption } from '@/utils/common';

export const enableStatusRecord: Record<Api.Common.EnableStatus, App.I18n.I18nKey> = {
  '1': 'page.manage.common.status.enable',
  '2': 'page.manage.common.status.disable'
};

export const enableStatusOptions = transformRecordToOption(enableStatusRecord);

export const userGenderRecord: Record<Api.SystemManage.MemberGender, App.I18n.I18nKey> = {
  '1': 'page.manage.user.gender.male',
  '2': 'page.manage.user.gender.female',
  '3': 'page.manage.user.gender.secrecy'
};

export const userGenderOptions = transformRecordToOption(userGenderRecord);

export const channelNormalRecord: Record<Api.SystemManage.ChannelNormal, App.I18n.I18nKey> = {
  '1': 'page.manage.channel.channelNormal.status.enable',
  '2': 'page.manage.channel.channelNormal.status.disable'
};

export const channelNormalOptions = transformRecordToOption(channelNormalRecord);
