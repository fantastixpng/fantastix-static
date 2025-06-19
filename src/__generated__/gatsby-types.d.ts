/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  GatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectorySortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type FieldSelectorEnum =
  | 'SELECT';

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
  readonly url: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileConnection_minArgs = {
  field: FileFieldSelector;
};


type FileConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly blksize: InputMaybe<FieldSelectorEnum>;
  readonly blocks: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly publicURL: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_minArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileSortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly blksize: InputMaybe<SortOrderEnum>;
  readonly blocks: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly publicURL: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageDataQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['GatsbyImageData']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
  readonly ne: InputMaybe<Scalars['GatsbyImageData']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageCropFocus =
  | 17
  | 0
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | ''
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly fixed: InputMaybe<ImageSharpFixedFieldSelector>;
  readonly fluid: InputMaybe<ImageSharpFluidFieldSelector>;
  readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly original: InputMaybe<ImageSharpOriginalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly resize: InputMaybe<ImageSharpResizeFieldSelector>;
};

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFixedSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly originalImg: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly presentationHeight: InputMaybe<FieldSelectorEnum>;
  readonly presentationWidth: InputMaybe<FieldSelectorEnum>;
  readonly sizes: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpFluidSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly originalImg: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly presentationHeight: InputMaybe<SortOrderEnum>;
  readonly presentationWidth: InputMaybe<SortOrderEnum>;
  readonly sizes: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpOriginalSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpResizeSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly fixed: InputMaybe<ImageSharpFixedSortInput>;
  readonly fluid: InputMaybe<ImageSharpFluidSortInput>;
  readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly original: InputMaybe<ImageSharpOriginalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly resize: InputMaybe<ImageSharpResizeSortInput>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFieldSelector = {
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly owner: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type InternalSortInput = {
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentDigest: InputMaybe<SortOrderEnum>;
  readonly contentFilePath: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly fieldOwners: InputMaybe<SortOrderEnum>;
  readonly ignoreType: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly owner: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type NodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type Query = {
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly allStrapiAbout: STRAPI_ABOUTConnection;
  readonly allStrapiArticle: STRAPI_ARTICLEConnection;
  readonly allStrapiAuthor: STRAPI_AUTHORConnection;
  readonly allStrapiCategory: STRAPI_CATEGORYConnection;
  readonly allStrapiComponentSharedMedia: STRAPI__COMPONENT_SHARED_MEDIAConnection;
  readonly allStrapiComponentSharedQuote: STRAPI__COMPONENT_SHARED_QUOTEConnection;
  readonly allStrapiComponentSharedRichText: STRAPI__COMPONENT_SHARED_RICH_TEXTConnection;
  readonly allStrapiComponentSharedRichTextBodyTextnode: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEConnection;
  readonly allStrapiComponentSharedSections: STRAPI__COMPONENT_SHARED_SECTIONSConnection;
  readonly allStrapiComponentSharedSeo: STRAPI__COMPONENT_SHARED_SEOConnection;
  readonly allStrapiComponentSharedSlider: STRAPI__COMPONENT_SHARED_SLIDERConnection;
  readonly allStrapiGlobal: STRAPI_GLOBALConnection;
  readonly allStrapiHomepage: STRAPI_HOMEPAGEConnection;
  readonly allStrapiMedia: STRAPI__MEDIAConnection;
  readonly allThemeUiConfig: ThemeUiConfigConnection;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly strapiAbout: Maybe<STRAPI_ABOUT>;
  readonly strapiArticle: Maybe<STRAPI_ARTICLE>;
  readonly strapiAuthor: Maybe<STRAPI_AUTHOR>;
  readonly strapiCategory: Maybe<STRAPI_CATEGORY>;
  readonly strapiComponentSharedMedia: Maybe<STRAPI__COMPONENT_SHARED_MEDIA>;
  readonly strapiComponentSharedQuote: Maybe<STRAPI__COMPONENT_SHARED_QUOTE>;
  readonly strapiComponentSharedRichText: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXT>;
  readonly strapiComponentSharedRichTextBodyTextnode: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE>;
  readonly strapiComponentSharedSections: Maybe<STRAPI__COMPONENT_SHARED_SECTIONS>;
  readonly strapiComponentSharedSeo: Maybe<STRAPI__COMPONENT_SHARED_SEO>;
  readonly strapiComponentSharedSlider: Maybe<STRAPI__COMPONENT_SHARED_SLIDER>;
  readonly strapiGlobal: Maybe<STRAPI_GLOBAL>;
  readonly strapiHomepage: Maybe<STRAPI_HOMEPAGE>;
  readonly strapiMedia: Maybe<STRAPI__MEDIA>;
  readonly themeUiConfig: Maybe<ThemeUiConfig>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


type Query_allStrapiAboutArgs = {
  filter: InputMaybe<STRAPI_ABOUTFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_ABOUTSortInput>>>;
};


type Query_allStrapiArticleArgs = {
  filter: InputMaybe<STRAPI_ARTICLEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_ARTICLESortInput>>>;
};


type Query_allStrapiAuthorArgs = {
  filter: InputMaybe<STRAPI_AUTHORFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_AUTHORSortInput>>>;
};


type Query_allStrapiCategoryArgs = {
  filter: InputMaybe<STRAPI_CATEGORYFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_CATEGORYSortInput>>>;
};


type Query_allStrapiComponentSharedMediaArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_SHARED_MEDIAFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_SHARED_MEDIASortInput>>>;
};


type Query_allStrapiComponentSharedQuoteArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_SHARED_QUOTEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_SHARED_QUOTESortInput>>>;
};


type Query_allStrapiComponentSharedRichTextArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXTFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXTSortInput>>>;
};


type Query_allStrapiComponentSharedRichTextBodyTextnodeArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODESortInput>>>;
};


type Query_allStrapiComponentSharedSectionsArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_SHARED_SECTIONSFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_SHARED_SECTIONSSortInput>>>;
};


type Query_allStrapiComponentSharedSeoArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_SHARED_SEOFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_SHARED_SEOSortInput>>>;
};


type Query_allStrapiComponentSharedSliderArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_SHARED_SLIDERFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_SHARED_SLIDERSortInput>>>;
};


type Query_allStrapiGlobalArgs = {
  filter: InputMaybe<STRAPI_GLOBALFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_GLOBALSortInput>>>;
};


type Query_allStrapiHomepageArgs = {
  filter: InputMaybe<STRAPI_HOMEPAGEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_HOMEPAGESortInput>>>;
};


type Query_allStrapiMediaArgs = {
  filter: InputMaybe<STRAPI__MEDIAFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__MEDIASortInput>>>;
};


type Query_allThemeUiConfigArgs = {
  filter: InputMaybe<ThemeUiConfigFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ThemeUiConfigSortInput>>>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiAboutArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  documentId: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiArticleArgs = {
  author: InputMaybe<STRAPI_AUTHORFilterInput>;
  category: InputMaybe<STRAPI_CATEGORYFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  cover: InputMaybe<STRAPI__MEDIAFilterInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  documentId: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiAuthorArgs = {
  articles: InputMaybe<STRAPI_ARTICLEFilterListInput>;
  avatar: InputMaybe<STRAPI__MEDIAFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  documentId: InputMaybe<StringQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiCategoryArgs = {
  articles: InputMaybe<STRAPI_ARTICLEFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  documentId: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiComponentSharedMediaArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentSharedQuoteArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiComponentSharedRichTextArgs = {
  body: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXTBodyFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentSharedRichTextBodyTextnodeArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_strapiComponentSharedSectionsArgs = {
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  heading: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentSharedSeoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  metaDescription: InputMaybe<StringQueryOperatorInput>;
  metaTitle: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentSharedSliderArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiGlobalArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  defaultSeo: InputMaybe<STRAPI__COMPONENT_SHARED_SEOFilterInput>;
  documentId: InputMaybe<StringQueryOperatorInput>;
  favicon: InputMaybe<STRAPI__MEDIAFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  siteDescription: InputMaybe<StringQueryOperatorInput>;
  siteName: InputMaybe<StringQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiHomepageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  ctaLink: InputMaybe<StringQueryOperatorInput>;
  documentId: InputMaybe<StringQueryOperatorInput>;
  heroImage: InputMaybe<STRAPI__MEDIAFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  sections: InputMaybe<STRAPI__COMPONENT_SHARED_SECTIONSFilterListInput>;
  showCta: InputMaybe<BooleanQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiMediaArgs = {
  alternativeText: InputMaybe<StringQueryOperatorInput>;
  caption: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  documentId: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  formats: InputMaybe<STRAPI__MEDIAFormatsFilterInput>;
  hash: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  localFile: InputMaybe<FileFilterInput>;
  mime: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};


type Query_themeUiConfigArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  preset: InputMaybe<JSONQueryOperatorInput>;
  prismPreset: InputMaybe<JSONQueryOperatorInput>;
};

type STRAPI_ABOUT = Node & {
  readonly blocks: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTUnion>>>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly documentId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_ABOUT_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_ABOUT_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_ABOUT_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_ABOUTConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_ABOUTEdge>;
  readonly group: ReadonlyArray<STRAPI_ABOUTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_ABOUT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_ABOUTConnection_distinctArgs = {
  field: STRAPI_ABOUTFieldSelector;
};


type STRAPI_ABOUTConnection_groupArgs = {
  field: STRAPI_ABOUTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_ABOUTConnection_maxArgs = {
  field: STRAPI_ABOUTFieldSelector;
};


type STRAPI_ABOUTConnection_minArgs = {
  field: STRAPI_ABOUTFieldSelector;
};


type STRAPI_ABOUTConnection_sumArgs = {
  field: STRAPI_ABOUTFieldSelector;
};

type STRAPI_ABOUTEdge = {
  readonly next: Maybe<STRAPI_ABOUT>;
  readonly node: STRAPI_ABOUT;
  readonly previous: Maybe<STRAPI_ABOUT>;
};

type STRAPI_ABOUTFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly documentId: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_ABOUTFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly documentId: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_ABOUTGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_ABOUTEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_ABOUTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_ABOUT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_ABOUTGroupConnection_distinctArgs = {
  field: STRAPI_ABOUTFieldSelector;
};


type STRAPI_ABOUTGroupConnection_groupArgs = {
  field: STRAPI_ABOUTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_ABOUTGroupConnection_maxArgs = {
  field: STRAPI_ABOUTFieldSelector;
};


type STRAPI_ABOUTGroupConnection_minArgs = {
  field: STRAPI_ABOUTFieldSelector;
};


type STRAPI_ABOUTGroupConnection_sumArgs = {
  field: STRAPI_ABOUTFieldSelector;
};

type STRAPI_ABOUTSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly documentId: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_ARTICLE = Node & {
  readonly author: Maybe<STRAPI_AUTHOR>;
  readonly blocks: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTSTRAPI__COMPONENT_SHARED_SLIDERUnion>>>;
  readonly category: Maybe<STRAPI_CATEGORY>;
  readonly children: ReadonlyArray<Node>;
  readonly content: Maybe<Scalars['String']>;
  readonly cover: Maybe<STRAPI__MEDIA>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly documentId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_ARTICLE_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_ARTICLE_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_ARTICLE_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_ARTICLEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_ARTICLEEdge>;
  readonly group: ReadonlyArray<STRAPI_ARTICLEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_ARTICLE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_ARTICLEConnection_distinctArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};


type STRAPI_ARTICLEConnection_groupArgs = {
  field: STRAPI_ARTICLEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_ARTICLEConnection_maxArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};


type STRAPI_ARTICLEConnection_minArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};


type STRAPI_ARTICLEConnection_sumArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};

type STRAPI_ARTICLEEdge = {
  readonly next: Maybe<STRAPI_ARTICLE>;
  readonly node: STRAPI_ARTICLE;
  readonly previous: Maybe<STRAPI_ARTICLE>;
};

type STRAPI_ARTICLEFieldSelector = {
  readonly author: InputMaybe<STRAPI_AUTHORFieldSelector>;
  readonly category: InputMaybe<STRAPI_CATEGORYFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly cover: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly documentId: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_ARTICLEFilterInput = {
  readonly author: InputMaybe<STRAPI_AUTHORFilterInput>;
  readonly category: InputMaybe<STRAPI_CATEGORYFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly cover: InputMaybe<STRAPI__MEDIAFilterInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly documentId: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_ARTICLEFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_ARTICLEFilterInput>;
};

type STRAPI_ARTICLEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_ARTICLEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_ARTICLEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_ARTICLE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_ARTICLEGroupConnection_distinctArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};


type STRAPI_ARTICLEGroupConnection_groupArgs = {
  field: STRAPI_ARTICLEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_ARTICLEGroupConnection_maxArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};


type STRAPI_ARTICLEGroupConnection_minArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};


type STRAPI_ARTICLEGroupConnection_sumArgs = {
  field: STRAPI_ARTICLEFieldSelector;
};

type STRAPI_ARTICLESortInput = {
  readonly author: InputMaybe<STRAPI_AUTHORSortInput>;
  readonly category: InputMaybe<STRAPI_CATEGORYSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly cover: InputMaybe<STRAPI__MEDIASortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly documentId: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_AUTHOR = Node & {
  readonly articles: Maybe<ReadonlyArray<Maybe<STRAPI_ARTICLE>>>;
  readonly avatar: Maybe<STRAPI__MEDIA>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly documentId: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_AUTHOR_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_AUTHOR_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_AUTHOR_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_AUTHORConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_AUTHOREdge>;
  readonly group: ReadonlyArray<STRAPI_AUTHORGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_AUTHOR>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_AUTHORConnection_distinctArgs = {
  field: STRAPI_AUTHORFieldSelector;
};


type STRAPI_AUTHORConnection_groupArgs = {
  field: STRAPI_AUTHORFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_AUTHORConnection_maxArgs = {
  field: STRAPI_AUTHORFieldSelector;
};


type STRAPI_AUTHORConnection_minArgs = {
  field: STRAPI_AUTHORFieldSelector;
};


type STRAPI_AUTHORConnection_sumArgs = {
  field: STRAPI_AUTHORFieldSelector;
};

type STRAPI_AUTHOREdge = {
  readonly next: Maybe<STRAPI_AUTHOR>;
  readonly node: STRAPI_AUTHOR;
  readonly previous: Maybe<STRAPI_AUTHOR>;
};

type STRAPI_AUTHORFieldSelector = {
  readonly articles: InputMaybe<STRAPI_ARTICLEFieldSelector>;
  readonly avatar: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly documentId: InputMaybe<FieldSelectorEnum>;
  readonly email: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_AUTHORFilterInput = {
  readonly articles: InputMaybe<STRAPI_ARTICLEFilterListInput>;
  readonly avatar: InputMaybe<STRAPI__MEDIAFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly documentId: InputMaybe<StringQueryOperatorInput>;
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_AUTHORGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_AUTHOREdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_AUTHORGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_AUTHOR>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_AUTHORGroupConnection_distinctArgs = {
  field: STRAPI_AUTHORFieldSelector;
};


type STRAPI_AUTHORGroupConnection_groupArgs = {
  field: STRAPI_AUTHORFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_AUTHORGroupConnection_maxArgs = {
  field: STRAPI_AUTHORFieldSelector;
};


type STRAPI_AUTHORGroupConnection_minArgs = {
  field: STRAPI_AUTHORFieldSelector;
};


type STRAPI_AUTHORGroupConnection_sumArgs = {
  field: STRAPI_AUTHORFieldSelector;
};

type STRAPI_AUTHORSortInput = {
  readonly articles: InputMaybe<STRAPI_ARTICLESortInput>;
  readonly avatar: InputMaybe<STRAPI__MEDIASortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly documentId: InputMaybe<SortOrderEnum>;
  readonly email: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_CATEGORY = Node & {
  readonly articles: Maybe<ReadonlyArray<Maybe<STRAPI_ARTICLE>>>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly documentId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_CATEGORY_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_CATEGORY_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_CATEGORY_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_CATEGORYConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_CATEGORYEdge>;
  readonly group: ReadonlyArray<STRAPI_CATEGORYGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_CATEGORY>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_CATEGORYConnection_distinctArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};


type STRAPI_CATEGORYConnection_groupArgs = {
  field: STRAPI_CATEGORYFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_CATEGORYConnection_maxArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};


type STRAPI_CATEGORYConnection_minArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};


type STRAPI_CATEGORYConnection_sumArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};

type STRAPI_CATEGORYEdge = {
  readonly next: Maybe<STRAPI_CATEGORY>;
  readonly node: STRAPI_CATEGORY;
  readonly previous: Maybe<STRAPI_CATEGORY>;
};

type STRAPI_CATEGORYFieldSelector = {
  readonly articles: InputMaybe<STRAPI_ARTICLEFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly documentId: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_CATEGORYFilterInput = {
  readonly articles: InputMaybe<STRAPI_ARTICLEFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly documentId: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_CATEGORYGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_CATEGORYEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_CATEGORYGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_CATEGORY>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_CATEGORYGroupConnection_distinctArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};


type STRAPI_CATEGORYGroupConnection_groupArgs = {
  field: STRAPI_CATEGORYFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_CATEGORYGroupConnection_maxArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};


type STRAPI_CATEGORYGroupConnection_minArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};


type STRAPI_CATEGORYGroupConnection_sumArgs = {
  field: STRAPI_CATEGORYFieldSelector;
};

type STRAPI_CATEGORYSortInput = {
  readonly articles: InputMaybe<STRAPI_ARTICLESortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly documentId: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_GLOBAL = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly defaultSeo: Maybe<STRAPI__COMPONENT_SHARED_SEO>;
  readonly documentId: Maybe<Scalars['String']>;
  readonly favicon: Maybe<STRAPI__MEDIA>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly siteDescription: Maybe<Scalars['String']>;
  readonly siteName: Maybe<Scalars['String']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_GLOBAL_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_GLOBAL_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_GLOBAL_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_GLOBALConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_GLOBALEdge>;
  readonly group: ReadonlyArray<STRAPI_GLOBALGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_GLOBAL>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_GLOBALConnection_distinctArgs = {
  field: STRAPI_GLOBALFieldSelector;
};


type STRAPI_GLOBALConnection_groupArgs = {
  field: STRAPI_GLOBALFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_GLOBALConnection_maxArgs = {
  field: STRAPI_GLOBALFieldSelector;
};


type STRAPI_GLOBALConnection_minArgs = {
  field: STRAPI_GLOBALFieldSelector;
};


type STRAPI_GLOBALConnection_sumArgs = {
  field: STRAPI_GLOBALFieldSelector;
};

type STRAPI_GLOBALEdge = {
  readonly next: Maybe<STRAPI_GLOBAL>;
  readonly node: STRAPI_GLOBAL;
  readonly previous: Maybe<STRAPI_GLOBAL>;
};

type STRAPI_GLOBALFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly defaultSeo: InputMaybe<STRAPI__COMPONENT_SHARED_SEOFieldSelector>;
  readonly documentId: InputMaybe<FieldSelectorEnum>;
  readonly favicon: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly siteDescription: InputMaybe<FieldSelectorEnum>;
  readonly siteName: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_GLOBALFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly defaultSeo: InputMaybe<STRAPI__COMPONENT_SHARED_SEOFilterInput>;
  readonly documentId: InputMaybe<StringQueryOperatorInput>;
  readonly favicon: InputMaybe<STRAPI__MEDIAFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly siteDescription: InputMaybe<StringQueryOperatorInput>;
  readonly siteName: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_GLOBALGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_GLOBALEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_GLOBALGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_GLOBAL>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_GLOBALGroupConnection_distinctArgs = {
  field: STRAPI_GLOBALFieldSelector;
};


type STRAPI_GLOBALGroupConnection_groupArgs = {
  field: STRAPI_GLOBALFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_GLOBALGroupConnection_maxArgs = {
  field: STRAPI_GLOBALFieldSelector;
};


type STRAPI_GLOBALGroupConnection_minArgs = {
  field: STRAPI_GLOBALFieldSelector;
};


type STRAPI_GLOBALGroupConnection_sumArgs = {
  field: STRAPI_GLOBALFieldSelector;
};

type STRAPI_GLOBALSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly defaultSeo: InputMaybe<STRAPI__COMPONENT_SHARED_SEOSortInput>;
  readonly documentId: InputMaybe<SortOrderEnum>;
  readonly favicon: InputMaybe<STRAPI__MEDIASortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly siteDescription: InputMaybe<SortOrderEnum>;
  readonly siteName: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_HOMEPAGE = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ctaLink: Maybe<Scalars['String']>;
  readonly documentId: Maybe<Scalars['String']>;
  readonly heroImage: Maybe<ReadonlyArray<Maybe<STRAPI__MEDIA>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly sections: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_SHARED_SECTIONS>>>;
  readonly showCta: Maybe<Scalars['Boolean']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_HOMEPAGE_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_HOMEPAGE_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_HOMEPAGE_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_HOMEPAGEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_HOMEPAGEEdge>;
  readonly group: ReadonlyArray<STRAPI_HOMEPAGEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_HOMEPAGE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_HOMEPAGEConnection_distinctArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEConnection_groupArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_HOMEPAGEConnection_maxArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEConnection_minArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEConnection_sumArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};

type STRAPI_HOMEPAGEEdge = {
  readonly next: Maybe<STRAPI_HOMEPAGE>;
  readonly node: STRAPI_HOMEPAGE;
  readonly previous: Maybe<STRAPI_HOMEPAGE>;
};

type STRAPI_HOMEPAGEFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ctaLink: InputMaybe<FieldSelectorEnum>;
  readonly documentId: InputMaybe<FieldSelectorEnum>;
  readonly heroImage: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly sections: InputMaybe<STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector>;
  readonly showCta: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_HOMEPAGEFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ctaLink: InputMaybe<StringQueryOperatorInput>;
  readonly documentId: InputMaybe<StringQueryOperatorInput>;
  readonly heroImage: InputMaybe<STRAPI__MEDIAFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly sections: InputMaybe<STRAPI__COMPONENT_SHARED_SECTIONSFilterListInput>;
  readonly showCta: InputMaybe<BooleanQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_HOMEPAGEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_HOMEPAGEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_HOMEPAGEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_HOMEPAGE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_HOMEPAGEGroupConnection_distinctArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEGroupConnection_groupArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_HOMEPAGEGroupConnection_maxArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEGroupConnection_minArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEGroupConnection_sumArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};

type STRAPI_HOMEPAGESortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ctaLink: InputMaybe<SortOrderEnum>;
  readonly documentId: InputMaybe<SortOrderEnum>;
  readonly heroImage: InputMaybe<STRAPI__MEDIASortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly sections: InputMaybe<STRAPI__COMPONENT_SHARED_SECTIONSSortInput>;
  readonly showCta: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_SHARED_MEDIA = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['Int']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_SHARED_MEDIAConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_MEDIAEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_MEDIAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_MEDIA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_MEDIAConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};


type STRAPI__COMPONENT_SHARED_MEDIAConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_MEDIAConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};


type STRAPI__COMPONENT_SHARED_MEDIAConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};


type STRAPI__COMPONENT_SHARED_MEDIAConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};

type STRAPI__COMPONENT_SHARED_MEDIAEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_SHARED_MEDIA>;
  readonly node: STRAPI__COMPONENT_SHARED_MEDIA;
  readonly previous: Maybe<STRAPI__COMPONENT_SHARED_MEDIA>;
};

type STRAPI__COMPONENT_SHARED_MEDIAFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_SHARED_MEDIAFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_SHARED_MEDIAGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_MEDIAEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_MEDIAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_MEDIA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_MEDIAGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};


type STRAPI__COMPONENT_SHARED_MEDIAGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_MEDIAGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};


type STRAPI__COMPONENT_SHARED_MEDIAGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};


type STRAPI__COMPONENT_SHARED_MEDIAGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_MEDIAFieldSelector;
};

type STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTSTRAPI__COMPONENT_SHARED_SLIDERUnion = STRAPI__COMPONENT_SHARED_MEDIA | STRAPI__COMPONENT_SHARED_QUOTE | STRAPI__COMPONENT_SHARED_RICH_TEXT | STRAPI__COMPONENT_SHARED_SLIDER;

type STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTUnion = STRAPI__COMPONENT_SHARED_MEDIA | STRAPI__COMPONENT_SHARED_QUOTE | STRAPI__COMPONENT_SHARED_RICH_TEXT;

type STRAPI__COMPONENT_SHARED_MEDIASortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_SHARED_QUOTE = Node & {
  readonly body: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['Int']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
};

type STRAPI__COMPONENT_SHARED_QUOTEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_QUOTEEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_QUOTEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_QUOTE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_QUOTEConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_QUOTEConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_QUOTEConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_QUOTEConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_QUOTEConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};

type STRAPI__COMPONENT_SHARED_QUOTEEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_SHARED_QUOTE>;
  readonly node: STRAPI__COMPONENT_SHARED_QUOTE;
  readonly previous: Maybe<STRAPI__COMPONENT_SHARED_QUOTE>;
};

type STRAPI__COMPONENT_SHARED_QUOTEFieldSelector = {
  readonly body: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_SHARED_QUOTEFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_SHARED_QUOTEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_QUOTEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_QUOTEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_QUOTE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_QUOTEGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_QUOTEGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_QUOTEGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_QUOTEGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_QUOTEGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_QUOTEFieldSelector;
};

type STRAPI__COMPONENT_SHARED_QUOTESortInput = {
  readonly body: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT = Node & {
  readonly body: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXTBody>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['Int']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTBody = {
  readonly data: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTBodyFieldSelector = {
  readonly data: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTBodyFilterInput = {
  readonly data: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFilterInput>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTBodySortInput = {
  readonly data: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODESortInput>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXTEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXT>;
  readonly node: STRAPI__COMPONENT_SHARED_RICH_TEXT;
  readonly previous: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXT>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector = {
  readonly body: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXTBodyFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTFilterInput = {
  readonly body: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXTBodyFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXTEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXTGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXTFieldSelector;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXTSortInput = {
  readonly body: InputMaybe<STRAPI__COMPONENT_SHARED_RICH_TEXTBodySortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE = Node & {
  readonly body: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE>;
  readonly node: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE;
  readonly previous: Maybe<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector = {
  readonly body: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};


type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODEFieldSelector;
};

type STRAPI__COMPONENT_SHARED_RICH_TEXT_BODY_TEXTNODESortInput = {
  readonly body: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type STRAPI__COMPONENT_SHARED_SECTIONS = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly content: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['Int']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_SHARED_SECTIONSConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_SECTIONSEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_SECTIONS>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_SECTIONSConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SECTIONSConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_SECTIONSConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SECTIONSConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SECTIONSConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};

type STRAPI__COMPONENT_SHARED_SECTIONSEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_SHARED_SECTIONS>;
  readonly node: STRAPI__COMPONENT_SHARED_SECTIONS;
  readonly previous: Maybe<STRAPI__COMPONENT_SHARED_SECTIONS>;
};

type STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly heading: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_SHARED_SECTIONSFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly heading: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_SHARED_SECTIONSFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI__COMPONENT_SHARED_SECTIONSFilterInput>;
};

type STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_SECTIONSEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_SECTIONS>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SECTIONSGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_SECTIONSFieldSelector;
};

type STRAPI__COMPONENT_SHARED_SECTIONSSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly heading: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_SHARED_SEO = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly metaDescription: Maybe<Scalars['String']>;
  readonly metaTitle: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['Int']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_SHARED_SEOConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_SEOEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_SEOGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_SEO>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_SEOConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SEOConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_SEOConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SEOConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SEOConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};

type STRAPI__COMPONENT_SHARED_SEOEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_SHARED_SEO>;
  readonly node: STRAPI__COMPONENT_SHARED_SEO;
  readonly previous: Maybe<STRAPI__COMPONENT_SHARED_SEO>;
};

type STRAPI__COMPONENT_SHARED_SEOFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly metaDescription: InputMaybe<FieldSelectorEnum>;
  readonly metaTitle: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_SHARED_SEOFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly metaDescription: InputMaybe<StringQueryOperatorInput>;
  readonly metaTitle: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_SHARED_SEOGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_SEOEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_SEOGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_SEO>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_SEOGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SEOGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_SEOGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SEOGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SEOGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_SEOFieldSelector;
};

type STRAPI__COMPONENT_SHARED_SEOSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly metaDescription: InputMaybe<SortOrderEnum>;
  readonly metaTitle: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_SHARED_SLIDER = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['Int']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_SHARED_SLIDERConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_SLIDEREdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_SLIDERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_SLIDERConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SLIDERConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_SLIDERConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SLIDERConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SLIDERConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};

type STRAPI__COMPONENT_SHARED_SLIDEREdge = {
  readonly next: Maybe<STRAPI__COMPONENT_SHARED_SLIDER>;
  readonly node: STRAPI__COMPONENT_SHARED_SLIDER;
  readonly previous: Maybe<STRAPI__COMPONENT_SHARED_SLIDER>;
};

type STRAPI__COMPONENT_SHARED_SLIDERFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_SHARED_SLIDERFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_SHARED_SLIDERGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_SHARED_SLIDEREdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_SHARED_SLIDERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_SHARED_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_SHARED_SLIDERGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SLIDERGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_SHARED_SLIDERGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SLIDERGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_SHARED_SLIDERGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_SHARED_SLIDERFieldSelector;
};

type STRAPI__COMPONENT_SHARED_SLIDERSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIA = Node & {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly documentId: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI__MEDIAFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly localFile: Maybe<File>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly strapi_document_id_or_regular_id: Maybe<Scalars['Int']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI__MEDIA_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI__MEDIA_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI__MEDIA_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI__MEDIAConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__MEDIAEdge>;
  readonly group: ReadonlyArray<STRAPI__MEDIAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__MEDIA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__MEDIAConnection_distinctArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAConnection_groupArgs = {
  field: STRAPI__MEDIAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__MEDIAConnection_maxArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAConnection_minArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAConnection_sumArgs = {
  field: STRAPI__MEDIAFieldSelector;
};

type STRAPI__MEDIAEdge = {
  readonly next: Maybe<STRAPI__MEDIA>;
  readonly node: STRAPI__MEDIA;
  readonly previous: Maybe<STRAPI__MEDIA>;
};

type STRAPI__MEDIAFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly documentId: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI__MEDIAFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly localFile: InputMaybe<FileFieldSelector>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly documentId: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI__MEDIAFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly strapi_document_id_or_regular_id: InputMaybe<IntQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI__MEDIAFilterInput>;
};

type STRAPI__MEDIAFormats = {
  readonly large: Maybe<STRAPI__MEDIAFormatsLarge>;
  readonly medium: Maybe<STRAPI__MEDIAFormatsMedium>;
  readonly small: Maybe<STRAPI__MEDIAFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI__MEDIAFormatsThumbnail>;
};

type STRAPI__MEDIAFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI__MEDIAFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI__MEDIAFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI__MEDIAFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI__MEDIAFormatsThumbnailFieldSelector>;
};

type STRAPI__MEDIAFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI__MEDIAFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI__MEDIAFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI__MEDIAFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI__MEDIAFormatsThumbnailFilterInput>;
};

type STRAPI__MEDIAFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly sizeInBytes: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sizeInBytes: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly sizeInBytes: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sizeInBytes: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly sizeInBytes: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sizeInBytes: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly sizeInBytes: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sizeInBytes: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly sizeInBytes: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sizeInBytes: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly sizeInBytes: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sizeInBytes: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAFormatsSortInput = {
  readonly large: InputMaybe<STRAPI__MEDIAFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI__MEDIAFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI__MEDIAFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI__MEDIAFormatsThumbnailSortInput>;
};

type STRAPI__MEDIAFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly sizeInBytes: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sizeInBytes: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly sizeInBytes: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sizeInBytes: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__MEDIAEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__MEDIAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__MEDIA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__MEDIAGroupConnection_distinctArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAGroupConnection_groupArgs = {
  field: STRAPI__MEDIAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__MEDIAGroupConnection_maxArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAGroupConnection_minArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAGroupConnection_sumArgs = {
  field: STRAPI__MEDIAFieldSelector;
};

type STRAPI__MEDIASortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly documentId: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI__MEDIAFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly localFile: InputMaybe<FileSortInput>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly strapi_document_id_or_regular_id: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<SiteGraphqlTypegen>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFieldSelector>;
  readonly host: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
  readonly polyfill: InputMaybe<FieldSelectorEnum>;
  readonly port: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
};

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly functionRoute: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginName: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly functionRoute: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginName: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

type SiteGraphqlTypegen = {
  readonly documentSearchPaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly generateOnBuild: Maybe<Scalars['Boolean']>;
  readonly typesOutputPath: Maybe<Scalars['String']>;
};

type SiteGraphqlTypegenFieldSelector = {
  readonly documentSearchPaths: InputMaybe<FieldSelectorEnum>;
  readonly generateOnBuild: InputMaybe<FieldSelectorEnum>;
  readonly typesOutputPath: InputMaybe<FieldSelectorEnum>;
};

type SiteGraphqlTypegenFilterInput = {
  readonly documentSearchPaths: InputMaybe<StringQueryOperatorInput>;
  readonly generateOnBuild: InputMaybe<BooleanQueryOperatorInput>;
  readonly typesOutputPath: InputMaybe<StringQueryOperatorInput>;
};

type SiteGraphqlTypegenSortInput = {
  readonly documentSearchPaths: InputMaybe<SortOrderEnum>;
  readonly generateOnBuild: InputMaybe<SortOrderEnum>;
  readonly typesOutputPath: InputMaybe<SortOrderEnum>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly component: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly pageContext: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly component: InputMaybe<SortOrderEnum>;
  readonly componentChunkName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly internalComponentName: InputMaybe<SortOrderEnum>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly pageContext: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly pluginCreator: InputMaybe<SitePluginSortInput>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldSelector = {
  readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
  readonly packageJson: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
  readonly resolve: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
  readonly version: InputMaybe<FieldSelectorEnum>;
};

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginSortInput = {
  readonly browserAPIs: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs: InputMaybe<SortOrderEnum>;
  readonly packageJson: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginFilepath: InputMaybe<SortOrderEnum>;
  readonly pluginOptions: InputMaybe<SortOrderEnum>;
  readonly resolve: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs: InputMaybe<SortOrderEnum>;
  readonly version: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadata = {
  readonly author: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly logo: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFieldSelector = {
  readonly author: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly logo: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataFilterInput = {
  readonly author: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly logo: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSortInput = {
  readonly author: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly logo: InputMaybe<SortOrderEnum>;
  readonly siteUrl: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type SiteSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenSortInput>;
  readonly host: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsxRuntime: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pathPrefix: InputMaybe<SortOrderEnum>;
  readonly polyfill: InputMaybe<SortOrderEnum>;
  readonly port: InputMaybe<SortOrderEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  readonly trailingSlash: InputMaybe<SortOrderEnum>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type ThemeUiConfig = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly preset: Maybe<Scalars['JSON']>;
  readonly prismPreset: Maybe<Scalars['JSON']>;
};

type ThemeUiConfigConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly group: ReadonlyArray<ThemeUiConfigGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ThemeUiConfigConnection_distinctArgs = {
  field: ThemeUiConfigFieldSelector;
};


type ThemeUiConfigConnection_groupArgs = {
  field: ThemeUiConfigFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ThemeUiConfigConnection_maxArgs = {
  field: ThemeUiConfigFieldSelector;
};


type ThemeUiConfigConnection_minArgs = {
  field: ThemeUiConfigFieldSelector;
};


type ThemeUiConfigConnection_sumArgs = {
  field: ThemeUiConfigFieldSelector;
};

type ThemeUiConfigEdge = {
  readonly next: Maybe<ThemeUiConfig>;
  readonly node: ThemeUiConfig;
  readonly previous: Maybe<ThemeUiConfig>;
};

type ThemeUiConfigFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly preset: InputMaybe<FieldSelectorEnum>;
  readonly prismPreset: InputMaybe<FieldSelectorEnum>;
};

type ThemeUiConfigFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly preset: InputMaybe<JSONQueryOperatorInput>;
  readonly prismPreset: InputMaybe<JSONQueryOperatorInput>;
};

type ThemeUiConfigGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ThemeUiConfigGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ThemeUiConfigGroupConnection_distinctArgs = {
  field: ThemeUiConfigFieldSelector;
};


type ThemeUiConfigGroupConnection_groupArgs = {
  field: ThemeUiConfigFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ThemeUiConfigGroupConnection_maxArgs = {
  field: ThemeUiConfigFieldSelector;
};


type ThemeUiConfigGroupConnection_minArgs = {
  field: ThemeUiConfigFieldSelector;
};


type ThemeUiConfigGroupConnection_sumArgs = {
  field: ThemeUiConfigFieldSelector;
};

type ThemeUiConfigSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly preset: InputMaybe<SortOrderEnum>;
  readonly prismPreset: InputMaybe<SortOrderEnum>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

type ArticleQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type ArticleQueryQuery = { readonly strapiArticle: { readonly strapi_id: number | null, readonly title: string | null, readonly content: string | null, readonly publishedAt: string | null, readonly updatedAt: string | null, readonly createdAt: string | null, readonly cover: { readonly url: string | null, readonly alternativeText: string | null, readonly localFile: { readonly id: string, readonly absolutePath: string, readonly publicURL: string | null, readonly url: string | null, readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } | null } | null } | null } | null };

type ArticlesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type ArticlesQueryQuery = { readonly allStrapiArticle: { readonly nodes: ReadonlyArray<{ readonly id: string, readonly strapi_id: number | null, readonly title: string | null, readonly content: string | null, readonly slug: string | null, readonly publishedAt: string | null, readonly createdAt: string | null, readonly updatedAt: string | null, readonly cover: { readonly url: string | null, readonly alternativeText: string | null, readonly localFile: { readonly absolutePath: string, readonly publicURL: string | null, readonly url: string | null, readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } | null } | null } | null, readonly category: { readonly name: string | null, readonly slug: string | null, readonly parent: { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | { readonly id: string } | null } | null, readonly author: { readonly id: string, readonly strapi_id: number | null, readonly name: string | null, readonly email: string | null, readonly avatar: { readonly id: string, readonly url: string | null, readonly alternativeText: string | null, readonly localFile: { readonly absolutePath: string, readonly publicURL: string | null, readonly url: string | null, readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } | null } | null } | null } | null }> } };

type CategoryQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type CategoryQueryQuery = { readonly strapiCategory: { readonly strapi_id: number | null, readonly slug: string | null, readonly name: string | null, readonly publishedAt: string | null, readonly createdAt: string | null, readonly updatedAt: string | null } | null };

type SiteMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


type SiteMetaDataQuery = { readonly site: { readonly siteMetadata: { readonly title: string | null, readonly siteUrl: string | null, readonly description: string | null, readonly author: string | null } | null } | null };


}
