/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  namespace Common {
    /** common params of paginating */
    interface PaginatingCommonParams {
      /** current page number */
      current: number;
      /** page size */
      size: number;
      /** total count */
      total: number;
    }

    /** common params of paginating query list data */
    interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
      records: T[];
    }

    /**
     * enable status
     *
     * - "1": enabled
     * - "2": disabled
     */
    type EnableStatus = '1' | '2';

    /** common record */
    type CommonRecord<T = any> = {
      /** record id */
      id: number;
      /** record create time */
      createAt: string;
      /** record update time */
      updateAt: string;
      /** record status */
      status: EnableStatus | null;
    } & T;
  }

  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      token: string;
    }

    interface MemberInfo {
      id: string;
      email: string;
      roles: string[];
      key: string;
      remainingQuota: number; // 剩余额度
      utilizedQuota: number; // 用了
      calls: number; // 调用次数
    }
  }

  /**
   * namespace Route
   *
   * backend api module: "route"
   */
  namespace Route {
    type ElegantConstRoute = import('@elegant-router/types').ElegantConstRoute;

    interface MenuRoute extends ElegantConstRoute {
      id: string;
    }

    interface UserRoute {
      routes: MenuRoute[];
      home: import('@elegant-router/types').LastLevelRouteKey;
    }
  }

  /**
   * namespace SystemManage
   *
   * backend api module: "systemManage"
   */
  namespace SystemManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;
    /**
     * user gender
     *
     * - "1": "male"
     * - "2": "female"
     */
    type MemberGender = '1' | '2' | '3';

    /** user */
    type Member = Common.CommonRecord<{
      email: string;
      gender: MemberGender | null;
    }>;

    /** user list */
    type MemberList = Common.PaginatingQueryRecord<Member>;

    /**
     * 1. 普通渠道
     * 2. 兜底渠道
     */
    type ChannelNormal = '1' | '2';

    type Channel = Common.CommonRecord<{
      id: number;
      name: string;
      baseUrl: string;
      key: string;
      model: string;
      order: number;
      normal: ChannelNormal | null;
    }>;

    type ChannelSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.Channel, 'model' | 'status' | 'normal'> & CommonSearchParams
    >;

    type ChannelEditParams = Pick<
      Api.SystemManage.Channel,
      'name' | 'baseUrl' | 'key' | 'model' | 'status' | 'normal' | 'id'
    >;

    type ChannelList = Common.PaginatingQueryRecord<Channel>;

    type Token = Common.CommonRecord<{
      id: number;
      name: string;
      key: string;
      utilizedQuota: number;
      remainingQuota: number;
    }>;

    type TokenSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.Token, 'name' | 'status'> & CommonSearchParams
    >;

    type TokenEditParams = Pick<
      Api.SystemManage.Token,
      'id' | 'name' | 'key' | 'utilizedQuota' | 'remainingQuota' | 'status'
    >;

    type TokenList = Common.PaginatingQueryRecord<Token>;

    type Log = Common.CommonRecord<{
      name: string;
      model: string;
      input: string;
      output: string;
      time: string;
      total: string;
      info: string;
    }>;

    type LogSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.Log, 'model'> & CommonSearchParams & { timeRange: string }
    >;

    type LogList = Common.PaginatingQueryRecord<Log>;

    type Setting = Common.CommonRecord<{
      name: string;
      configuration: any;
    }>;

    type EditSettingParams = CommonType.RecordNullable<Api.SystemManage.Setting>;
  }
}
